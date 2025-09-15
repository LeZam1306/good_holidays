interface DateEventInterface {
  date: string | Date;
}

const DateEvent = ({ date }: DateEventInterface) => {
  const dateFormat = new Date(date);

  return (
    <p className="text-sm">
      {dateFormat.toLocaleDateString("en-US", {
        month: "short",
        weekday: "long",
        day: "numeric",
      })}
    </p>
  );
};

export default DateEvent;
