import { Plus } from "lucide-react";

const Footer = () => {
  return (
    <nav className="flex flex-row items-center justify-center pb-4">
      <button className="rounded-full bg-yellow-400 p-4 text-black">
        <Plus size={23} />
      </button>
    </nav>
  );
};

export default Footer;
