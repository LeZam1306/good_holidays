import { CalendarFold } from "lucide-react";
import Button from "../auth/Button";
import InputField from "../common/InputField";

const CreateEventForm = () => {
  return (
    <div className="h-full">
      <h1 className="mb-4 flex flex-row items-center gap-2 rounded-xl bg-yellow-400 p-2 text-2xl font-semibold text-black ">
        <CalendarFold size={30} strokeWidth={2.5} /> Create your event
      </h1>
      <form className="flex h-full flex-col gap-4 pb-4">
        <InputField
          name="eventName"
          label="Event Name"
          placeholder="Enter event name"
        />

        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            Description
          </label>
          <textarea
            className="scrollbar-none w-full resize-none overflow-y-auto rounded-xl bg-gray-800 px-4 py-2 text-lg text-white"
            id="description"
            name="description"
            rows={4}
            placeholder="Describe your event..."
          ></textarea>
        </div>

        <InputField
          name="place"
          label="Location"
          placeholder="Event location"
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <InputField
              name="maxParticipant"
              type="number"
              label="Max Participants"
              placeholder="Maximum number of participants"
            />
          </div>

          <div className="flex-1">
            <InputField name="eventDate" type="date" label="Event Date" />
          </div>
        </div>
        <Button className="">Submit new event</Button>
      </form>
    </div>
  );
};

export default CreateEventForm;
