import { motion } from "motion/react";

const NoEventSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 px-5 mt-[30%]">
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="w-[40dvw]"
        src="./images/overcast.png"
        alt="overcast weather"
      />
      <h1 className="text-center text-4xl font-bold">No events for now...</h1>
    </section>
  );
};

export default NoEventSection;
