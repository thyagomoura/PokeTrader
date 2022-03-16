import HistoryIcon from "../../assets/history.png";
import "../../styles/history.css";

function HistoryComponent() {
  var save = JSON.parse(localStorage.getItem("Trade"));
  var resultLastTrade = localStorage.getItem("ValidTrade");
  var baseExperience1 = localStorage.getItem("TotalBaseExperiencePlayer1");
  var baseExperience2 = localStorage.getItem("TotalBaseExperiencePlayer2");
  let validMap = true;

  if (save === null || save === undefined) {
    validMap = false;
  }
  return (
    <div className="historyBox">
      <img alt="historyicon" src={HistoryIcon} />
      <div className="ShowHistory">
        <h3>
          Última trade -{" "}
          {resultLastTrade && resultLastTrade === "true" ? (
            <>Sucesso</>
          ) : (
            <>Sem sucesso</>
          )}
        </h3>
        <h4>
          {baseExperience1} ------- {baseExperience2}
        </h4>
        <hr />
        {validMap && validMap ? (
          save.map((index) => (
            <p>
              Nome: {index.pokemon.name}
              <br /> Quantidade: {index.quantity}
              <br /> Experience: {index.pokemon.experience}
            </p>
          ))
        ) : (
          <div>Nenhuma trade realizada ainda</div>
        )}
        <hr />
      </div>
    </div>
  );
}
export default HistoryComponent;
