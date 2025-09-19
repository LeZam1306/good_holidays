import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Modal from "../components/common/Modal";
import EventInfo from "../components/event/EventInfo";
import EventCard from "../components/home/EventCard";
import NoEventSection from "../components/home/NoEventSection";
import { useGetEventInfo } from "../hooks/useGetEventInfo";
import { useGetEvents } from "../hooks/useGetEvents";
import { useAppStore } from "../stores/useStore";
import type { ModalToggleRef } from "../types/ModalToggle.interface";

const Home = () => {
  const { _id } = useAppStore();
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
          eventId={selectedEvent?._id}
          isError={isError}
          isPending={isPending}
          content={eventInfoData?.data || undefined}
          isPromotor={selectedEvent?.promotor[1] === _id}
        />
      </Modal>

      {data?.data.events.length === 0 ? (
        <NoEventSection />
      ) : (
        <ul className="flex flex-col items-center justify-center gap-3 px-4">
          {data?.data.events.map((event) => {
            return (
              <EventCard
                key={event._id}
                event={event}
                showMore={handleOpenModal}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
