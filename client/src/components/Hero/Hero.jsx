import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Transfer Smarter.  
          <span>Your Journey, Guided With Confidence.</span>
        </h1>

        <p className="hero-sub">
          VitaPrep helps motivated students navigate the transfer process with clarity, strategy, 
          and personalized mentorship from two founders who’ve successfully done it themselves.
        </p>

        <div className="hero-actions">
          <a href="#booking" className="hero-cta">Book a Free Consultation</a>
          <a href="#services" className="hero-secondary">Explore Services</a>
        </div>

        <div className="hero-pillars">
          <div className="pillar">
            <h3>Proven Strategy</h3>
            <p>Blueprint designed by successful transfer students.</p>
          </div>
          <div className="pillar">
            <h3>1-on-1 Mentorship</h3>
            <p>Personal guidance tailored to your goals & background.</p>
          </div>
          <div className="pillar">
            <h3>Application Excellence</h3>
            <p>Essay, timeline, school list, and execution support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
