import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-line bg-ink-2 px-4 text-base text-bone shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-pine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
