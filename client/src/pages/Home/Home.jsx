import Hero from "../../components/Hero/Hero";
import FounderCard from "../../components/FounderCard/FounderCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Booking from "../../components/Booking/Booking";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Home.css";
import { Target, Edit3, Rocket } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About */}
      <section id="about" className="founders-section">
        <h2 className="founders-title">Meet the Founders</h2>
        <p className="founders-sub">
          VitaPrep was built by two students who navigated the transfer process firsthand — 
          now dedicated to helping others do the same with clarity, confidence, and strategy.
        </p>

        <div className="founders-grid">
          <div className="founder-card">
            <img src="/founder1.jpg" alt="Alex" />
            <h3>Alex Rivera</h3>
            <p className="role">Co-Founder · Transfer Mentor</p>
            <p className="bio">
              Alex successfully transferred into a top CS program after optimizing his essays, 
              course strategy, and school list. He now coaches students 1-on-1 to master the same process.
            </p>
          </div>

          <div className="founder-card">
            <img src="/founder2.jpg" alt="Maya" />
            <h3>Maya Shah</h3>
            <p className="role">Co-Founder · Student Coach</p>
            <p className="bio">
              Maya navigated the transfer process as a first-generation student and brings a holistic 
              approach to helping students build compelling narratives and standout applications.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-sub">
        Transparent pricing. Personalized guidance. Built to help you transfer with confidence.
      </p>

      <div className="services-grid">
        
        {/* Service 1 */}
        <div className="service-card-modern">
          <div className="service-icon">
            <Target size={34} strokeWidth={2.4} />
          </div>
          <h3>Transfer Mentorship</h3>
          <p className="desc">
            One-on-one guidance from founders who successfully transferred themselves. 
            Strategy, timelines, and clarity from start to finish.
          </p>
          <div className="price">$99</div>
        </div>

        {/* Service 2 */}
        <div className="service-card-modern">
          <div className="service-icon">
            <Edit3 size={34} strokeWidth={2.4} />
          </div>
          <h3>Essay Support</h3>
          <p className="desc">
            From brainstorming to final polish — build compelling narratives 
            that help your application stand out authentically.
          </p>
          <div className="price">$149</div>
        </div>

        {/* Service 3 */}
        <div className="service-card-modern">
          <div className="service-icon">
            <Rocket size={34} strokeWidth={2.4} />
          </div>
          <h3>Full Prep Package</h3>
          <p className="desc">
            Complete transfer guidance: mentorship, essay editing, school list planning, 
            and execution support — all in one.
          </p>
          <div className="price">$349</div>
        </div>

      </div>
    </section>

      <Booking />
      <ContactForm />
    </>
  );
}
