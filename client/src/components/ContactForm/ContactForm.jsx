import { Mail, User, MessageSquare } from "lucide-react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-sub">
        Have questions? Want to learn more? Send us a message and a founder will reach out shortly.
      </p>

      <div className="contact-card">

        <form className="contact-form">

          {/* Name Input */}
          <div className="input-wrapper">
            <User className="input-icon" size={20} />
            <input type="text" placeholder="Full Name" required />
          </div>

          {/* Email Input */}
          <div className="input-wrapper">
            <Mail className="input-icon" size={20} />
            <input type="email" placeholder="Email Address" required />
          </div>

          {/* Message Input */}
          <div className="input-wrapper textarea-wrapper">
            <MessageSquare className="input-icon" size={20} />
            <textarea placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}
