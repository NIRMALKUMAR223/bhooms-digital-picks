import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children }) => {
  const ref = useRef();
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          if (direction === "up") {
            ref.current.classList.add("from-top");
          } else {
            ref.current.classList.remove("from-top");
          }
        } else {
          ref.current.classList.remove("visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [direction]);

  return (
    <div ref={ref} className="fade-section">
      {children}
    </div>
  );
};

export default ScrollReveal;