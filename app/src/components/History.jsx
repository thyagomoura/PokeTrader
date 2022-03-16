import HistoryIcon from "../assets/history.png";
import "../styles/history.css";

function HistoryComponent() {
  var save = JSON.parse(localStorage.getItem("Trade"));

  return (
    <div className="historyBox">
      <img alt="history icon" src={HistoryIcon} />
      <div>
        {save.map((index) => (
                <p className="ShowHistory">Nome: {index.pokemon.name}  
                Quantidade: {index.quantity}
                Experience: {index.pokemon.experience}</p>
        ))}

      </div>
    </div>
  );
}
export default HistoryComponent;
