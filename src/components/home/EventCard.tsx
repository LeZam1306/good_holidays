import { Ellipsis } from "lucide-react";
import type { EventInterface } from "../../types/Event.interface";
import DateEvent from "../common/DateEvent";
import StatusEvent from "../event/StatusEvent";

interface EventCardInterface {
  event: EventInterface;
  showMore: (eventId: string) => void;
}

const EventCard = ({ event, showMore }: EventCardInterface) => {
  return (
    <li
      key={event._id}
      className="w-full rounded-xl bg-gray-900/70 backdrop-blur"
    >
      <div className="flex flex-row justify-between py-2 pr-3 pl-4">
        <div>
          <h3 className="text-lg">{event.eventName}</h3>
          <p className="text-sm text-gray-300">
            by <span>{event.promotor[0]}</span>
          </p>
        </div>
        <StatusEvent status={event.status} />
      </div>
      <div className="mx-2 flex flex-row items-center justify-between border-t-1 border-gray-700 px-2 py-1">
        <DateEvent date={event.date} />
        <button type="button" onClick={() => showMore(event._id)}>
          <Ellipsis className="text-white" />
        </button>
      </div>
    </li>
  );
};

export default EventCard;
