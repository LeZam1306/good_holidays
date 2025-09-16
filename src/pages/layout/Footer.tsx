import { Plus } from "lucide-react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import SlideUpPanel from "../../components/common/SlideUpPanel";
import type { SlideUpPanelHandleInterface } from "../../types/SlideUpPanel.interface";
const Footer = () => {
  const location = useLocation();
  const locationName = location.pathname.substring(1);
  const slideUpPanelRef = useRef<SlideUpPanelHandleInterface>(null);

  switch (locationName) {
    case "":
      return (
        <nav className="flex flex-row items-center justify-center pb-4">
          <button
            onClick={() => slideUpPanelRef.current?.togglePanel()}
            className="rounded-full bg-yellow-400 p-4 text-black"
          >
            <Plus size={23} />
          </button>
          <SlideUpPanel ref={slideUpPanelRef}></SlideUpPanel>
        </nav>
      );
    default:
      return <></>;
  }
};

export default Footer;
