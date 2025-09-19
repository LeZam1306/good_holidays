import { CircleX } from "lucide-react";
import { useImperativeHandle, useRef, useState } from "react";
import type { ModalToggleRef } from "../../types/ModalToggle.interface";

interface ModalInterface {
  children: React.ReactNode;
  ref?: React.Ref<ModalToggleRef>;
  className?: string;
  title?: string;
  background?: boolean;
}

const Modal = ({
  children,
  ref,
  title,
  background = true,
  className = "h-[90vh] w-[92%] rounded-xl bg-gray-900/90 backdrop-blur absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
}: ModalInterface) => {
  const modalRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    toggleModal: () => {
      setIsOpen(!isOpen);
    },
  }));

  if (!isOpen) return <></>;
  return (
    <>
      {background && (
        <div
          className="absolute top-0 left-0 z-[49] h-full w-full bg-black/60"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}
      <article className={className} ref={modalRef}>
        <div className="flex h-14 w-full flex-row items-center justify-end border-b-1 border-gray-200 px-2">
          {title && (
            <h3 className="absolute left-0 w-full p-[38px] text-center text-xl">
              {title}
            </h3>
          )}
          <CircleX
            className="z-50"
            size={30}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {children}
      </article>
    </>
  );
};

export default Modal;
