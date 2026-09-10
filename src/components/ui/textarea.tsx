import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full rounded-md border border-line bg-ink-2 px-4 py-3 text-base text-bone shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-pine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine/30 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
