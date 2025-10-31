import { useRef, useState } from "react";

const useServicesSwiperArrows = () => {
  //   setup the arrows setting
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  //   setup the custom pagination
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return {
    prevRef,
    nextRef,
    mainSwiper,
    setMainSwiper,
    activeIndex,
    setActiveIndex,
  };
};

export default useServicesSwiperArrows;
