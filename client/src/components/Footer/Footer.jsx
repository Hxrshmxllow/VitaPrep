import { Instagram, Mail, Linkedin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-content">
        {/* Logo + Description */}
        <div className="footer-col">
          <h3 className="footer-logo">VitaPrep</h3>
          <p className="footer-desc">
            Helping students transfer with clarity, confidence, and personalized guidance.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="mailto:hello@vitaprep.com" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Navigate</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#booking">Book a Session</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Programs</h4>
          <a href="#services">Transfer Mentorship</a>
          <a href="#services">Essay Support</a>
          <a href="#services">Full Prep Package</a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VitaPrep. All rights reserved.</p>
      </div>

    </footer>
  );
}
