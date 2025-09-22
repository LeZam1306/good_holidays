import { Send } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useSearchParams } from "react-router-dom";
import InputField from "../components/common/InputField";
import { usePostInvitation } from "../hooks/usePostInvitation";

const Messaging = () => {
  const { data, isPending, isError, mutate } = usePostInvitation();
  const [searchesParams] = useSearchParams();
  const [pseudo, setPseudo] = useState("");
  const eventId = useMemo(
    () => searchesParams.get("eventId"),
    [searchesParams]
  );

  useEffect(() => {
    console.log(data);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ pseudo: pseudo, eventId: eventId as string });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPseudo(e.target.value);
  };

  if (eventId) {
    return (
      <div className="h-full">
        <form onSubmit={handleSubmit} className="px-2">
          <InputField
            name="invitation"
            type="text"
            placeholder="MyFriend33"
            variant="auth"
            label="Add participant"
            labelClassName="text-base"
            onChange={handleChange}
            value={pseudo}
          />
          <button
            type="submit"
            className=" relative top-[-41px] left-[88%] flex items-center justify-center"
          >
            {isPending ? (
              <OrbitProgress
                color="white"
                style={{ fontSize: "7px", transform: "translate(0, -3px)" }}
              />
            ) : (
              <Send size={30} />
            )}
          </button>
        </form>
        {data && typeof data?.error === "boolean" && data.error ? (
          <p className="text-center">{data.message}</p>
        ) : (
          data?.error === false && (
            <p className="text-center">
              {data?.message || "Invitation sent successfully"}
            </p>
          )
        )}
        {isError && <p className="text-center">Error Server</p>}
      </div>
    );
  }
  return <div className="h-full"></div>;
};

export default Messaging;
