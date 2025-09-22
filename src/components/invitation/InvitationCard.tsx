import { ChevronDown, MailPlus } from "lucide-react";
import { useState } from "react";

interface InvitationCardProps {
  invitation: {
    _id: string;
    event: {
      _id: string;
      eventName: string;
      date: Date;
      promotor: string;
      description: string;
      location: string;
    };
  };
}

const InvitationCard = ({ invitation }: InvitationCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="w-full rounded-xl bg-gray-900/70 backdrop-blur">
      <div
        onClick={toggleDropdown}
        className="flex w-full cursor-pointer flex-row items-center justify-between gap-2 rounded-xl px-4 py-4 text-lg transition-colors hover:bg-gray-800/50"
      >
        <div className="flex items-center gap-2">
          <MailPlus size={30} />
          Invitation receive of {invitation.event.promotor}
        </div>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown size={20} />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="transform border-t border-gray-700 px-4 py-3 transition-transform duration-300">
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <span className="font-semibold">Event:</span>{" "}
              {invitation.event.eventName}
            </p>
            <p>
              <span className="font-semibold">From:</span>{" "}
              {invitation.event.promotor}
            </p>
            <p>
              <span className="font-semibold">Date:</span>{" "}
              {new Date(invitation.event.date).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {invitation.event.location}
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {invitation.event.description}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="rounded bg-green-600 px-3 py-2 text-sm text-white transition-colors hover:bg-green-700">
              Accept
            </button>
            <button className="rounded bg-red-600 px-3 py-2 text-sm text-white transition-colors hover:bg-red-700">
              Decline
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default InvitationCard;
