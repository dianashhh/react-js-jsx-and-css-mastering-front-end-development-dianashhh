import React, { useState, useEffect } from "react";

const Tagline = () => {
  const tagline = "BRINGING HOPE TO CREATIVES";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 50; // fast typing
    const interval = setInterval(() => {
      setDisplayedText(tagline.slice(0, index + 1));
      index++;
      if (index === tagline.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="tagline-container">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </h2>
  );
};

export default Tagline;
