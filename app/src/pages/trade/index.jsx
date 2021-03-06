import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../../styles/trader.css";
import Charmaleon from "../../assets/charmaleon.png";
import TradeIcon from "../../assets/tradeIcon.png";
import Player from "../../components/Player/Player";
import History from "../../components/History/History";

const TradePage = () => {
  const [numPokemonTrade1, setNumPokemonTrade1] = useState([]);
  const [numPokemonTrade2, setNumPokemonTrade2] = useState([]);
  const history = useHistory();

  var trade = [];
  var support = "";
  let TotalExperienceP1 = 0;
  let TotalExperienceP2 = 0;

  const ValidTrade = () => {
    if (
      numPokemonTrade1.length < 1 ||
      numPokemonTrade1.length > 6 ||
      numPokemonTrade2.length < 1 ||
      numPokemonTrade2.length > 6
    ) {
      alert("Um player não selecionou entre 1 e 6 pokemons para troca");
    } else {
      numPokemonTrade1.map((index) => {
        if (Array.isArray(trade)) {
          TotalExperienceP1 =
            +TotalExperienceP1 + +(index.pokemon.experience * index.quantity);
          localStorage.setItem("TotalBaseExperiencePlayer1", TotalExperienceP1);
          trade.push(index);
          return trade;
        }
        return "";
      });

      numPokemonTrade2.map((index) => {
        TotalExperienceP2 =
          +TotalExperienceP2 + +(index.pokemon.experience * index.quantity);
        localStorage.setItem("TotalBaseExperiencePlayer2", TotalExperienceP2);
        trade.push(index);
        support = JSON.stringify(trade);
        localStorage.setItem("Trade", support);
        return history.push("/result");
      });
    }
  };

  return (
    <div className="TraderGlobalContent">
      <History />
      <Player
        numPlayer={1}
        numPokemonTrade={numPokemonTrade1}
        setNumPokemonTrade={setNumPokemonTrade1}
      />
      <div className="TraderImgs">
        <img alt="Charmandr Pokemon" src={Charmaleon} />
        <img className="TradeIcon" alt="Trade icon" src={TradeIcon} onClick={ValidTrade} />
      </div>
      <Player
        numPlayer={2}
        numPokemonTrade={numPokemonTrade2}
        setNumPokemonTrade={setNumPokemonTrade2}
      />
    </div>
  );
};

export default TradePage;
