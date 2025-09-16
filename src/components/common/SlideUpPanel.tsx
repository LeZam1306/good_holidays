import { animate, motion, useMotionValue } from "motion/react";
import { useImperativeHandle, useRef } from "react";
import type { SlideUpPanelHandleInterface } from "../../types/SlideUpPanel.interface";

const SlideUpPanel = ({
  children,
  ref,
}: {
  children?: React.ReactNode;
  ref?: React.Ref<SlideUpPanelHandleInterface>;
}) => {
  const countraintOverlayRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  const animatePanel = (isOpen: boolean) => {
    const target = isOpen
      ? -countraintOverlayRef?.current!.offsetHeight + window.innerHeight
      : 0;
    animate(y, target, { type: "spring", stiffness: 300, damping: 30 });
  };

  useImperativeHandle(ref, () => ({
    togglePanel: () => {
      animatePanel(y.get() === 0);
    },
  }));

  return (
    <div
      ref={countraintOverlayRef}
      className="pointer-events-none absolute top-10 z-50 flex h-[200vh] w-full flex-col justify-end"
      //style={{ height: "calc(-161px + 200vh" }}
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
        className="scrollbar-none pointer-events-auto relative bottom-0 h-screen w-full rounded-t-lg bg-gray-900 px-6 py-4 pt-8 pb-[120px]"
        onDragEnd={(_, info) => {
          const currentY = y.get();
          const threshold = -window.innerHeight / 2; // Threshold at mid-screen height

          // Priority to velocity (fast gesture)
          if (info.velocity.y < -400) {
            animatePanel(true); // Fast upward gesture = open
          } else if (info.velocity.y > 400) {
            animatePanel(false); // Fast downward gesture = close
          }
          // Otherwise, base on position
          else if (currentY < threshold) {
            animatePanel(true); // Panel above threshold = stay open
          } else {
            animatePanel(false); // Panel below threshold = close
          }
        }}
      >
        <div className="absolute top-2 left-1/2 h-1 w-1/6 -translate-x-1/2 rounded-xl bg-gray-700"></div>
        {children}
      </motion.section>
    </div>
  );
};

export default SlideUpPanel;
