import { cn } from "@/lib/utils";

type AvailabilityBadgeProps = {
  status: string;
  className?: string;
};

const AvailabilityBadge = ({ status, className }: AvailabilityBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20",
        className
      )}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400" />
      {status}
    </div>
  );
};

export default AvailabilityBadge;
