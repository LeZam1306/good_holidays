import { CalendarFold } from "lucide-react";
import { useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { usePostEvent } from "../../hooks/usePostEvent";
import type { PostEventInterface } from "../../types/PostEvent.interface";
import Button from "../auth/Button";
import InputField from "../common/InputField";

const CreateEventForm = () => {
  const { mutate, isPending, isError, isSuccess } = usePostEvent();
  const [formData, setFormData] = useState<Partial<PostEventInterface>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "maxParticipants"
          ? Number(value)
          : name === "eventDate"
          ? new Date(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eventData: PostEventInterface = {
      eventName: formData.eventName || "",
      description: formData.description,
      location: formData.location || "",
      maxParticipants: formData.maxParticipants,
      eventDate: formData.eventDate || new Date(),
    };

    mutate(eventData);
  };
  return (
    <div className="h-full">
      <h1 className="mb-4 flex flex-row items-center gap-2 rounded-xl bg-yellow-400 p-2 text-2xl font-semibold text-black ">
        <CalendarFold size={30} strokeWidth={2.5} /> Create your event
      </h1>
      <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4 pb-4">
        <InputField
          name="eventName"
          label="Event Name"
          placeholder="Enter event name"
          value={formData.eventName || ""}
          onChange={handleInputChange}
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
            value={formData.description || ""}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <InputField
          name="location"
          label="Location"
          placeholder="Event location"
          value={formData.location || ""}
          onChange={handleInputChange}
        />
        <div className="flex gap-4">
          <div className="flex-1">
            <InputField
              name="maxParticipants"
              type="number"
              label="Max Participants"
              placeholder="Maximum number of participants"
              value={formData.maxParticipants?.toString() || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex-1">
            <InputField
              name="eventDate"
              type="date"
              label="Event Date"
              value={
                formData.eventDate
                  ? formData.eventDate.toISOString().split("T")[0]
                  : ""
              }
              onChange={handleInputChange}
            />
          </div>
        </div>
        {isError && (
          <p className="text-red-500">
            Error creating event. Please try again.
          </p>
        )}
        {isSuccess && (
          <p className="text-green-500">Event created successfully!</p>
        )}
        <Button type="submit" className={isPending ? "opacity-50" : ""}>
          {isPending ? (
            <OrbitProgress
              dense
              color="#ffffff"
              textColor="#ffffff"
              style={{ fontSize: "5px" }}
            />
          ) : (
            "Submit new event"
          )}
        </Button>
      </form>
    </div>
  );
};

export default CreateEventForm;
