import "../style/singleCardCont.css";
import "../style/stepper.css";
import "../style/iconButton.css";

export default function Card({ value, score, countDown, countUp }) {
  return (
    <div className="singleCardCont">
      <p>{value}</p>
      <div className="stepper">
        <div className="iconButton" onClick={() => countDown(score)}>
          -
        </div>
        <p>{score}</p>
        <div className="iconButton" onClick={() => countUp(score)}>
          +
        </div>
      </div>
    </div>
  );
}
