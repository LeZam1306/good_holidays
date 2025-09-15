import { Check, Clock, CopyX, RotateCcw } from "lucide-react";
import type { StatusInterface } from "../../types/Status.interface";

const StatusEvent = ({ status = "soon" }: StatusInterface) => {
  switch (status) {
    case "soon":
      return (
        <div className="flex flex-col items-center justify-center rounded-xl bg-blue-400 px-3 py-2 text-black">
          <Clock />
          <p>Soon</p>
        </div>
      );
    case "under way":
      return (
        <div className="flex flex-col items-center justify-center rounded-xl bg-yellow-400 px-3 py-2 text-black">
          <RotateCcw />
          <p>Under way</p>
        </div>
      );
    case "finished":
      return (
        <div className="flex flex-col items-center justify-center rounded-xl bg-green-400 px-3 py-2 text-black">
          <Check />
          <p>Finished</p>
        </div>
      );
    case "canceled":
      return (
        <div className="flex flex-col items-center justify-center rounded-xl bg-red-400 px-3 py-2 text-black">
          <CopyX />
          <p>Canceled</p>
        </div>
      );
  }
};
export default StatusEvent;
