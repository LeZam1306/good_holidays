interface DateEventInterface {
  date: string | Date;
  years?: boolean;
  className?: string;
}

const DateEvent = ({
  date,
  years = false,
  className = "text-sm",
}: DateEventInterface) => {
  const dateFormat = new Date(date);

  return (
    <p className={className}>
      {years
        ? dateFormat.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : dateFormat.toLocaleDateString("en-US", {
            month: "short",
            weekday: "long",
            day: "numeric",
          })}
    </p>
  );
};

export default DateEvent;
