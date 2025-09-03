import { motion } from "motion/react";
import { useRef } from "react";

const Home = () => {
  const countraintOverlayRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-[30%] h-full">
      <section className="flex flex-col items-center justify-center gap-3 px-5">
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[40dvw]"
          src="./images/3d-map.png"
          alt="overcast weather"
        />
        <h1 className="text-center text-4xl font-bold">Where are we going ?</h1>
      </section>
      <div
        ref={countraintOverlayRef}
        className="absolute top-10 h-[200vh] w-full"
      >
        <motion.section
          drag="y"
          dragConstraints={countraintOverlayRef}
          dragMomentum={false}
          dragElastic={0}
          className="relative h-screen w-full translate-y-3/4 rounded-t-4xl bg-gray-900 px-6 py-4 pt-8"
        >
          <div className="absolute top-2 left-1/2 h-1 w-1/6 -translate-x-1/2 rounded-xl bg-gray-700"></div>
          <form className="w-full">
            <input
              id="city"
              name="city"
              type="text"
              className="h-14 w-full rounded-full bg-gray-800 px-12"
              placeholder="Marseille"
            />
          </form>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
