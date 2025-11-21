import "./FounderCard.css";

export default function FounderCard({ name, image, bio }) {
  return (
    <div className="founder-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}
