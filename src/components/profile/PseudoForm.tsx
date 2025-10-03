import { Send, SquarePen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePatchPseudo } from "../../hooks/usePatchPseudo";
import { useAppStore } from "../../stores/useStore";

const PseudoForm = () => {
  const { mutate, isError, isSuccess } = usePatchPseudo();
  const { pseudo } = useAppStore();
  const changePseudo = useAppStore((state) => state.changePseudo);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [currentPseudo, setNewPseudo] = useState<string>(pseudo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSuccess) changePseudo(inputRef.current?.value as string);
  }, [isSuccess, changePseudo]);

  const handleClick = () => {
    setIsEditing(false);
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPseudo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ pseudo: currentPseudo });
  };

  return (
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
          className="text-center text-lg"
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
      {isError && (
        <p className="mt-2 text-yellow-500">This username already exists.</p>
      )}
    </form>
  );
};

export default PseudoForm;
