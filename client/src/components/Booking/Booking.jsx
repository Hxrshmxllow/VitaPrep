import "./Booking.css";

export default function Booking() {
  return (
    <section id="booking" className="booking-section">
      <h2 className="booking-title">Book a Session</h2>
      <p className="booking-sub">
        Schedule a free consultation with a VitaPrep founder.  
        You'll receive personalized guidance and a clear strategy to accelerate your transfer journey.
      </p>

      <div className="booking-card">
        <iframe
          src="https://calendly.com/your-link"
          className="booking-embed"
          scrolling="no"
        ></iframe>
      </div>
    </section>
  );
}
