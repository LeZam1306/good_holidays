import { Send, SquarePen } from "lucide-react";
import { useRef, useState } from "react";
import DateEvent from "../components/common/DateEvent";
import { useAppStore } from "../stores/useStore";

const Profile = () => {
  const { pseudo, creationDate, verified } = useAppStore();
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [currentPseudo, setNewPseudo] = useState<string>(pseudo);
  const date = new Date(creationDate);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsEditing(false);
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPseudo(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="h-full">
      <div className="flex items-center justify-center">
        <div className="flex h-18 w-18 items-center justify-center rounded-full bg-gray-950/50 p-0 text-3xl leading-none font-bold text-white">
          {pseudo.substring(0, 1).toUpperCase()}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center justify-center px-4 pt-4"
      >
        <div className="relative flex flex-row items-center justify-center gap-2">
          <input
            ref={inputRef}
            id="pseudo"
            name="pseudo"
            type="text"
            className="text-lg"
            readOnly={isEditing}
            value={currentPseudo}
            onChange={handleChange}
          />
          {!isEditing ? (
            <button
              key="send"
              type="submit"
              className="absolute -right-7 translate-x-1/2 rounded-full bg-gray-950/50 p-2.5"
            >
              <Send />
            </button>
          ) : (
            <button
              key="edit"
              type="button"
              className="absolute -right-7 translate-x-1/2 rounded-full bg-gray-950/50 p-2.5"
              onClick={handleClick}
            >
              <SquarePen />
            </button>
          )}
        </div>
      </form>
      <ul className="mx-4 my-5 flex h-full flex-col items-start gap-2 rounded-xl bg-gray-950/50 px-4 py-3 text-lg">
        <li className="flex flex-row gap-2">
          Create the{" "}
          <DateEvent className="text-lg underline" date={date} years={true} />
        </li>
        <li>
          Acount verified :{" "}
          {verified ? (
            <div className="ml-2 rounded-xl bg-green-600 px-2 py-0.5 shadow-2xl">
              Verified
            </div>
          ) : (
            <button
              className="ml-2 rounded-xl bg-yellow-600 px-2 py-0.5 shadow-2xl"
              type="button"
            >
              Verified Now
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
