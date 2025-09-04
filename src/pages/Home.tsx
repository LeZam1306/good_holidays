import NoEventSection from "../components/NoEventSection";
import SlideUpPanel from "../components/SlideUpPanel";

const Home = () => {
  return (
    <div className="h-full">
      <NoEventSection />
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
