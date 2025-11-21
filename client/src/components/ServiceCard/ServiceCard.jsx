import "./ServiceCard.css";

export default function ServiceCard({ name, price, desc }) {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{desc}</p>
      <div className="price">${price}</div>
    </div>
  );
}
