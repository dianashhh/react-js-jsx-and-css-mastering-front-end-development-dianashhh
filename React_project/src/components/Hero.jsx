import React from "react";

// Import your yarn background image
const yarnBg = new URL(
  "../assets/360_F_193056336_2FZXjSBnLY2qUXfdRaez2gckRNRuUd8M.jpg",
  import.meta.url
).href;

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${yarnBg})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#FFDAB9]/50"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl">
        {/* Tagline */}
        <h1 className="hero-tagline">
          BRINGING HOPE TO CREATIVES
        </h1>

        {/* Donate button */}
        <a
          href="https://www.un.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="donate-button"
        >
          Donate
        </a>
      </div>
    </section>
  );
};

export default Hero;
