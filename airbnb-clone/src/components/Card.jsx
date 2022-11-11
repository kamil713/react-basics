import image from "../assets/images/katie-zaferes.png";
import star from "../assets/images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={image} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}
