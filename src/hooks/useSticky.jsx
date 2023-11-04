import { useState } from "react";
const useSticky = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [paddingClass, setPaddingClass] = useState("");

  // const obs = new IntersectionObserver(
  //   function (entries) {
  //     const ent = entries[0];

  //     if (!ent.isIntersecting) {
  //       setStickyClass("sticky");
  //       setPaddingClass("sticky-padding");
  //     } else if (ent.isIntersecting) {
  //       setStickyClass("");
  //       setPaddingClass("");
  //     }
  //   },
  //   {
  //     root: null,
  //     threshold: 0,
  //   }
  // );
  // const heroElement = document.querySelectorAll(".section-hero");
  // heroElement.forEach((el) => {
  //   obs.observe(el);
  // });

  return { stickyClass, paddingClass };
};

export default useSticky;
