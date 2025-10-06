import { CirclePlus, MapPin, Users } from "lucide-react";
import { OrbitProgress } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import { usePatchEvent } from "../../hooks/usePatchEvent";
import type { EventInfoInterface } from "../../types/EventInfo.interface";
import EditableField from "../common/EditableField";

interface EventInfoComponentInterface {
  content: EventInfoInterface | undefined;
  isPending: boolean;
  isError: boolean;
  isPromotor: boolean;
  eventId: string | undefined;
}

const EventInfo = ({
  content,
  isPromotor,
  eventId,
}: EventInfoComponentInterface) => {
  const navigate = useNavigate();
  const patchEvent = usePatchEvent();

  const handleSaveDescription = (newDescription: string) => {
    if (eventId) {
      patchEvent.mutate({
        eventId,
        description: newDescription,
      });
    }
  };

  const handleSaveLocation = (newLocation: string) => {
    if (eventId) {
      patchEvent.mutate({
        eventId,
        location: newLocation,
      });
    }
  };
  if (content === undefined)
    return (
      <div className="flex w-full items-center justify-center p-4">
        <OrbitProgress color="#ffffff" size="small" textColor="#ffffff" />
      </div>
    );
  return (
    <div className="p-4">
      {/* Error messages display */}
      {patchEvent.data?.error && (
        <p className="mb-4 text-red-500">{patchEvent.data.message}</p>
      )}

      {/* Success messages display */}
      {patchEvent.data && !patchEvent.data.error && (
        <p className="mb-4 text-green-500">{patchEvent.data.message}</p>
      )}

      {/* Server error display */}
      {patchEvent.isError && <p className="mb-4 text-red-500">Error server</p>}

      <div className="mb-4">
        <EditableField
          value={content.description || ""}
          onSave={handleSaveDescription}
          canEdit={isPromotor}
          multiline={true}
        />
      </div>
      <div className="mb-4 flex flex-row items-center gap-2">
        <MapPin />
        <EditableField
          value={content.location || ""}
          onSave={handleSaveLocation}
          canEdit={isPromotor}
          className="flex-1"
        />
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
                onClick={() => navigate(`/messaging?eventId=${eventId}`)}
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
