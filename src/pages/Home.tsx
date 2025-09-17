import { Ellipsis } from "lucide-react";
import DateEvent from "../components/common/DateEvent";
import Modal from "../components/common/Modal";
import StatusEvent from "../components/event/StatusEvent";
import NoEventSection from "../components/home/NoEventSection";
import { useGetEvents } from "../hooks/useGetEvents";

const Home = () => {
  const { data } = useGetEvents();

  const handleOpenModal = (title: string) => {};

  return (
    <div className="h-full">
      <Modal>bonjour</Modal>
      {data?.data.events.length === 0 ? (
        <NoEventSection />
      ) : (
        <ul className="flex flex-col items-center justify-center gap-3 px-4">
          {data?.data.events.map((event) => {
            return (
              <li
                key={event._id}
                className="w-full rounded-xl bg-gray-900/70 backdrop-blur"
                onClick={() => handleOpenModal(event.eventName)}
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
                  <button type="button">
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
