import { OrbitProgress } from "react-loading-indicators";
import DateEvent from "../components/common/DateEvent";
import PseudoForm from "../components/profile/PseudoForm";
import { usePostLogout } from "../hooks/usePostLogout";
import { useAppStore } from "../stores/useStore";

const Profile = () => {
  const logout = usePostLogout();
  const { pseudo, creationDate, verified } = useAppStore();
  const date = new Date(creationDate);

  return (
    <div className="h-full">
      <div className="flex items-center justify-center">
        <div className="flex h-18 w-18 items-center justify-center rounded-full bg-gray-950/50 p-0 text-3xl leading-none font-bold text-white">
          {pseudo.substring(0, 1).toUpperCase()}
        </div>
      </div>
      <PseudoForm />
      <ul className="mx-4 my-5 flex h-full flex-col items-start gap-2 rounded-xl bg-gray-950/50 px-4 py-3 text-lg">
        <li className="flex flex-row gap-2">
          Create the{" "}
          <DateEvent className="text-lg underline" date={date} years={true} />
        </li>
        <li>
          Acount verified :{" "}
          <button
            type="button"
            className={`ml-2 rounded-lg ${
              verified ? "bg-green-600" : "bg-yellow-600"
            } bg-green-600 px-3 py-0.5 shadow-2xl`}
          >
            {verified ? "Verified" : "Verified Now"}
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => logout.mutate()}
            className="mt-2 text-yellow-500 underline"
          >
            {logout.isPending ? (
              <OrbitProgress
                dense
                color="#ffffff"
                textColor="#ffffff"
                style={{ fontSize: "5px" }}
              />
            ) : (
              "Log out of account"
            )}
          </button>
          {logout.isError && <p>Error while logging out, please try again</p>}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
