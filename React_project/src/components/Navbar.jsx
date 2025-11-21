import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Navbar = () => {
  // State to track hovered menu item
  const [hovered, setHovered] = useState(null);

  // Menu items
  const menuItems = ["Home", "About", "Shop", "Category", "Contact"];

  return (
    <nav
      style={{
        backgroundColor: "#4B0082", // Darker violet for stronger contrast
        padding: "12px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* LEFT — LOGO */}
      <div
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "white",
          letterSpacing: "1px",
        }}
      >
        YarnIt
      </div>

      {/* CENTER — MENU LINKS */}
      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transition: "0.3s",
              color: hovered === index ? "#FFB6C1" : "white",
              textShadow:
                hovered === index
                  ? "0 0 10px #ffffff, 0 0 15px #FFB6C1, 0 0 20px #FF69B4"
                  : "none",
              fontWeight: "bold",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* RIGHT — SEARCH + ICONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          color: "white",
          fontSize: "20px",
        }}
      >
        {/* Search bar */}
        <div
          style={{
            backgroundColor: "white",
            padding: "6px 12px",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "black",
          }}
        >
          <FaSearch />
          <input
            type="text"
            placeholder="Search items..."
            style={{
              border: "none",
              outline: "none",
              fontSize: "16px",
              width: "120px",
            }}
          />
        </div>

        {/* Icons */}
        <FaUser style={{ cursor: "pointer" }} />
        <FaShoppingCart style={{ cursor: "pointer" }} />
      </div>
    </nav>
  );
};

export default Navbar;
