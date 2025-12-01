import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<LinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // Next.js doesn't have "pending", but you can keep it if you want
  children: ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, activeClassName, pendingClassName, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href; // simple active check
    // const isPending = false; // Next.js doesn't provide isPending by default

    return (
      <Link href={href!} ref={ref} {...props} className={cn(className, isActive && activeClassName)}>
        {props.children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
