import { ChevronLeft, Mail, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetInvitationNumber } from "../../hooks/useGetInvitationNumber";

const Header = () => {
  const { data, isSuccess } = useGetInvitationNumber();
  const navigate = useNavigate();
  const location = useLocation();
  const locationName = location.pathname.substring(1);

  switch (locationName) {
    case "login":
      return <></>;
    case "":
      return (
        <nav className="flex flex-row items-center justify-between px-4 pr-4.5 pb-3">
          <h2 className="text-2xl font-semibold">GoodHolidays</h2>
          <div className="flex flex-row gap-2">
            <Link
              to="/messaging"
              className="relative rounded-full bg-gray-950/50 p-2 text-white"
            >
              <Mail />
              {isSuccess &&
                typeof data?.data?.invitationNumber === "number" &&
                data.data.invitationNumber > 0 && (
                  <div className="absolute top-0 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-600 text-xs">
                    {data.data.invitationNumber}
                  </div>
                )}
            </Link>
            <Link
              to="/profile"
              className="rounded-full bg-gray-950/50 p-2 text-white"
            >
              <User size={24} />
            </Link>
          </div>
        </nav>
      );
    default:
      return (
        <nav className="flex flex-row  items-center px-4 pb-3 pl-4.5">
          <button
            className="rounded-full bg-gray-950/50 p-2"
            type="button"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="translate-x-[-1px]" />
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2 text-xl font-semibold">
            {locationName.toUpperCase()}
          </h2>
        </nav>
      );
  }
};

export default Header;
