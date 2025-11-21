import React, { useState, useEffect } from "react";

const AnimatedTitles = () => {
  const tagline = "bringing hope to creatives";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + tagline[index]);
        setIndex(index + 1);
      }, 150); // typing speed in ms

      return () => clearTimeout(timeout);
    }
  }, [index, tagline]);

  return (
    <h2
      className="text-5xl md:text-6xl font-extrabold text-[#FF8C42] drop-shadow-[0_0_20px_#FF8C42] text-center"
      style={{
        WebkitTextStroke: "1px black", // optional outline
      }}
    >
      {displayedText}
      <span className="blinking-cursor">|</span>
    </h2>
  );
};

export default AnimatedTitles;
