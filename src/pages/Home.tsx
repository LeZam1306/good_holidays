import { Ellipsis } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DateEvent from "../components/common/DateEvent";
import Modal from "../components/common/Modal";
import EventInfo from "../components/event/EventInfo";
import StatusEvent from "../components/event/StatusEvent";
import NoEventSection from "../components/home/NoEventSection";
import { useGetEventInfo } from "../hooks/useGetEventInfo";
import { useGetEvents } from "../hooks/useGetEvents";
import type { ModalToggleRef } from "../types/ModalToggle.interface";

const Home = () => {
  const [eventId, setEventId] = useState("");
  const { eventInfoData, refetch, isError, isPending } =
    useGetEventInfo(eventId);
  const modalRef = useRef<ModalToggleRef>(null);
  const { data } = useGetEvents();

  const selectedEvent = useMemo(
    () => data?.data.events.find((event) => event._id === eventId),
    [data?.data.events, eventId]
  );

  const handleOpenModal = useCallback((eventId: string) => {
    setEventId(eventId);
    modalRef.current?.toggleModal();
  }, []);

  useEffect(() => {
    if (eventId) refetch();
  }, [eventId, refetch]);

  return (
    <div className="h-full">
      <Modal ref={modalRef} title={selectedEvent?.eventName}>
        <EventInfo
          isError={isError}
          isPending={isPending}
          content={eventInfoData?.data || undefined}
        />
      </Modal>

      {data?.data.events.length === 0 ? (
        <NoEventSection />
      ) : (
        <ul className="flex flex-col items-center justify-center gap-3 px-4">
          {data?.data.events.map((event) => {
            return (
              <li
                key={event._id}
                className="w-full rounded-xl bg-gray-900/70 backdrop-blur"
              >
                <div className="flex flex-row justify-between py-2 pr-3 pl-4">
                  <div>
                    <h3 className="text-lg">{event.eventName}</h3>
                    <p className="text-sm text-gray-300">
                      by <span>{event.promotor}</span>
                    </p>
                  </div>
                  <StatusEvent status={event.status} />
                </div>
                <div className="mx-2 flex flex-row items-center justify-between border-t-1 border-gray-700 px-2 py-1">
                  <DateEvent date={event.date} />
                  <button
                    type="button"
                    onClick={() => handleOpenModal(event._id)}
                  >
                    <Ellipsis className="text-white" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
