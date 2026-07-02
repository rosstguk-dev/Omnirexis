import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
  padding?: "default" | "sm" | "none";
};

export function Section({
  children,
  className,
  id,
  ariaLabelledby,
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        padding === "default" && "section-padding",
        padding === "sm" && "section-padding-sm",
        className,
      )}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}