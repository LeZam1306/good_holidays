import { useMemo } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useSearchParams } from "react-router-dom";
import InvitationCard from "../components/invitation/InvitationCard";
import InvitationPostForm from "../components/invitation/InvitationPostForm";
import { useGetInvitation } from "../hooks/useGetInvitation";

const Messaging = () => {
  const { data, isPending, isError, isSuccess } = useGetInvitation();
  const [searchesParams] = useSearchParams();

  const eventId = useMemo(
    () => searchesParams.get("eventId"),
    [searchesParams]
  );

  if (eventId) return <InvitationPostForm eventId={eventId} />;
  return (
    <div className="h-full">
      {isError && <p> Error server, try again </p>}
      {isPending && (
        <OrbitProgress
          color="white"
          style={{ fontSize: "14px", transform: "translate(0, -3px)" }}
        />
      )}
      {data?.error && <p>{data?.message}</p>}
      {isSuccess && data !== undefined && !data?.error && (
        <ul className="flex flex-col items-center justify-center gap-3 px-4">
          {data.data.invitations.map((invitation) => (
            <InvitationCard key={invitation._id} invitation={invitation} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Messaging;
