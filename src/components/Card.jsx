export default function Card({ player, score }) {
  return (
    <div>
      <p>{player}</p>
      <div className="stepper">
        <div className="iconButton">-</div>
        <p>{score}</p>
        <div className="iconButton">+</div>
      </div>
    </div>
  );
}
