import { businessHoursSchedule } from "@/lib/site";
import { cn } from "@/lib/utils";

type BusinessHoursProps = {
  className?: string;
  slotClassName?: string;
  daysClassName?: string;
  hoursClassName?: string;
};

export function BusinessHours({
  className,
  slotClassName,
  daysClassName,
  hoursClassName,
}: BusinessHoursProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {businessHoursSchedule.map((slot) => (
        <div key={slot.days} className={slotClassName}>
          <p className={daysClassName}>{slot.days}</p>
          <p className={hoursClassName}>{slot.hours}</p>
        </div>
      ))}
    </div>
  );
}