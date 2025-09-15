import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-4 pr-4.5 pb-3">
      <h2 className="text-2xl font-semibold">GoodHolidays</h2>
      <Link
        to="/profile"
        className="rounded-full bg-gray-950/50 p-2 text-white"
      >
        <User size={24} />
      </Link>
    </nav>
  );
};

export default Header;
