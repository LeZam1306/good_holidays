import { Clock, Ellipsis } from "lucide-react";
import SlideUpPanel from "../components/SlideUpPanel";

const Home = () => {
  return (
    <div className="h-full">
      {/*<NoEventSection />*/}
      <ul className="flex flex-col items-center justify-center px-4">
        <li className="w-full rounded-xl bg-gray-900/70 backdrop-blur">
          <div className="flex flex-row justify-between py-2 pr-3 pl-4">
            <div>
              <h3 className="text-lg">Anniv de Mikel 🥳</h3>
              <p className="text-sm text-gray-300">
                by <span>LeZam1306</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-blue-400 px-3 py-2 text-black">
              <Clock />
              <p>Prévu</p>
            </div>
          </div>
          <div className="mx-2 flex flex-row items-center justify-between border-t-1 border-gray-700 px-2 py-1">
            <p className="text-sm">May 27 monday</p>
            <button>
              <Ellipsis className="text-white" />
            </button>
          </div>
        </li>
      </ul>
      <SlideUpPanel>
        {/* <form className="w-full">
          <input
            id="city"
            name="city"
            type="text"
            className="h-14 w-full rounded-full bg-gray-800 px-12"
            placeholder="Marseille"
          />
        </form> */}
      </SlideUpPanel>
    </div>
  );
};

export default Home;
