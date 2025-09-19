import { CirclePlus, MapPin, Users } from "lucide-react";
import { OrbitProgress } from "react-loading-indicators";
import type { EventInfoInterface } from "../../types/EventInfo.interface";

interface EventInfoComponentInterface {
  content: EventInfoInterface | undefined;
  isPending: boolean;
  isError: boolean;
  isPromotor: boolean;
}

const EventInfo = ({
  content,
  isPending,
  isError,
  isPromotor,
}: EventInfoComponentInterface) => {
  if (isError)
    return (
      <div className="flex w-full items-center justify-center p-4">
        <p className="text-red-500">A server error has occurred</p>
      </div>
    );
  if (isPending)
    return (
      <div className="flex w-full items-center justify-center p-4">
        <OrbitProgress color="#ffffff" size="small" textColor="#ffffff" />
      </div>
    );
  if (content === undefined)
    return (
      <div className="flex w-full items-center justify-center p-4">
        <OrbitProgress color="#ffffff" size="small" textColor="#ffffff" />
      </div>
    );
  return (
    <div className="p-4">
      <div className="mb-4">
        <p>{content.description}</p>
      </div>
      <div className="mb-4 flex flex-row items-center gap-2">
        <MapPin />
        <p>{content.location}</p>
      </div>
      <div>
        <h3 className="mb-2.5 flex flex-row items-center gap-2">
          <Users /> Participants
        </h3>
        <ul className="flex flex-row flex-wrap gap-1.5">
          {content.participants.map((participant) => {
            return (
              <li
                key={participant}
                className="flex items-center justify-center rounded-md border-1 border-gray-300 px-1 hover:shadow-xs hover:shadow-gray-300"
              >
                <span>{participant}</span>
              </li>
            );
          })}
          {isPromotor && (
            <>
              <button
                type="button"
                className="flex flex-row items-center justify-center gap-1 rounded-lg bg-gray-300 px-1 leading-none text-black"
              >
                <CirclePlus size={18} />
                Add participant
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EventInfo;
