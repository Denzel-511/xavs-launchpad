import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a <ChartContainer />");
  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ReactNode;
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, cfg]) => cfg.theme || cfg.color);
  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`)
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

// ---- FIXED TYPING FOR TOOLTIP ----
type FixedTooltipProps = React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
  className?: string;
  labelClassName?: string;
  payload?: Array<{
    value: any;
    name?: string;
    dataKey?: string;
    color?: string;
    payload?: Record<string, any>;
  }>;
  label?: string | React.ReactNode;
  labelFormatter?: (label: any) => React.ReactNode;
  formatter?: (value: any, name: string, entry: any) => React.ReactNode;
  color?: string;
};

const ChartTooltipContent = React.forwardRef<HTMLDivElement, FixedTooltipProps>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) return null;

    const [first] = payload;
    const tooltipLabel = !hideLabel
      ? (() => {
          const key = `${labelKey || first.dataKey || first.name || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, first, key);
          const value = typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
          return value ? <div className={cn("font-medium", labelClassName)}>{value}</div> : null;
        })()
      : null;

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel && tooltipLabel}

        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.color || item.payload?.fill;

            return (
              <div key={index} className="flex w-full items-center gap-2">
                {!hideIndicator && (
                  <div
                    className={cn("rounded-sm", {
                      "h-2 w-2": indicator === "dot",
                      "w-1 h-3": indicator === "line",
                      "w-0 border border-dashed": indicator === "dashed",
                    })}
                    style={{ background: indicatorColor, borderColor: indicatorColor }}
                  />
                )}

                <div className="flex flex-1 justify-between">
                  <span className="text-muted-foreground">
                    {itemConfig?.label || item.name}
                  </span>
                  {item.value !== undefined && (
                    <span className="font-mono font-medium">{item.value.toLocaleString()}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

// ---- FIXED LEGEND TYPING ----
type FixedLegendProps = React.ComponentProps<"div"> & {
  payload?: { value: string; color?: string; dataKey?: string }[];
  hideIcon?: boolean;
  nameKey?: string;
  verticalAlign?: "top" | "bottom";
};

const ChartLegendContent = React.forwardRef<HTMLDivElement, FixedLegendProps>(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) return null;

    return (
      <div ref={ref} className={cn("flex items-center justify-center gap-4", className)}>
        {payload.map((item, i) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div key={i} className="flex items-center gap-1.5">
              {!hideIcon ? (
                itemConfig?.icon ? <itemConfig.icon /> : <div className="h-2 w-2 rounded-sm" style={{ backgroundColor: item.color }} />
              ) : null}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";

function getPayloadConfigFromPayload(config: ChartConfig, payload: any, key: string) {
  if (!payload || typeof payload !== "object") return undefined;

  const inner = payload.payload && typeof payload.payload === "object" ? payload.payload : undefined;

  let configKey = key;

  if (typeof payload[key] === "string") configKey = payload[key];
  else if (inner && typeof inner[key] === "string") configKey = inner[key];

  return config[configKey] || config[key];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
