import { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        <div className="nav-logo">VitaPrep</div>

        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#booking" className="nav-link">Book</a>
          <a href="#contact" className="nav-link-btn">Contact</a>
        </div>
      </div>
    </nav>
  );
}
