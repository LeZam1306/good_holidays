import { animate, motion, useMotionValue } from "motion/react";
import { useRef } from "react";

const Home = () => {
  const countraintOverlayRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

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
        className="absolute top-10 h-[200vh] w-full flex flex-col justify-end"
        style={{ height: "calc(-161px + 200vh" }}
      >
        <motion.section
          drag="y"
          dragTransition={{
            power: 0.5,
            bounceDamping: 20,
          }}
          dragConstraints={countraintOverlayRef}
          dragMomentum={false}
          dragElastic={0}
          style={{ y }}
          className="relative bottom-0 h-screen w-full rounded-t-4xl bg-gray-900 px-6 py-4 pt-8"
          onDragEnd={(e, info) => {
            let target: number = 0;
            if (
              info.point.y < window.innerHeight / 2 ||
              info.velocity.y < -400
            ) {
              target =
                -countraintOverlayRef.current!.offsetHeight +
                window.innerHeight;
            } else if (
              info.point.y > window.innerHeight / 2 ||
              info.velocity.y > 400
            ) {
              target = 0;
            }
            animate(y, target, { type: "spring", stiffness: 300, damping: 30 });
          }}
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
