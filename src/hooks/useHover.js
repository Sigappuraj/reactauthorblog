import { useEffect, useState } from "react";

const useHover = (target) => {
  const [isHovered, setHovered] = useState(false);
  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    //   console.log("running...");
    document
      .querySelector(target)
      .addEventListener("mouseenter", onMouseEnter);
    document
      .querySelector(target)
      .addEventListener("mouseleave", onMouseLeave);

    return () => {
      document
        .querySelector(target)
        .removeEventListener("mouseenter", onMouseEnter);
      document
        .querySelector(target)
        .removeEventListener("mouseleave", onMouseLeave);
    };
  }, [target]);

  return isHovered;
};

export default useHover;
