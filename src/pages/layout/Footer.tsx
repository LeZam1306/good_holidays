import { Plus } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const locationName = location.pathname.substring(1);

  switch (locationName) {
    case "":
      return (
        <nav className="flex flex-row items-center justify-center pb-4">
          <button className="rounded-full bg-yellow-400 p-4 text-black">
            <Plus size={23} />
          </button>
        </nav>
      );
    default:
      return <></>;
  }
};

export default Footer;
