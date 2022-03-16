import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../../styles/trader.css";
import Charmaleon from "../../assets/charmaleon.png";
import TradeIcon from "../../assets/tradeIcon.png";
import Player from "../../components/Player";

const TradePage = () => {
  const [numPokemonTrade1, setNumPokemonTrade1] = useState([]);
  const [numPokemonTrade2, setNumPokemonTrade2] = useState([]);
  const history = useHistory();

  let TotalexperienceP1 = 0;
  let TotalexperienceP2 = 0;
  var trade = [];
  var suporte = "";

  const ValidTrade = () => {
    //valid entered player
    if (
      numPokemonTrade1.length < 1 ||
      numPokemonTrade1.length > 6 ||
      numPokemonTrade2.length < 1 ||
      numPokemonTrade2.length > 6
    ) {
      alert("Um player não selecionou entre 1 e 6 pokemons para troca");
    } else {
      numPokemonTrade1.map((index) => {
        TotalexperienceP1 =
          +TotalexperienceP1 + +(index.pokemon.experience * index.quantity);

        //set localStorage player 1
        if (Array.isArray(trade)) {
          trade.push(index);
          return trade;
        }
      });

      

      //set localStorage player 2
      numPokemonTrade2.map((index) => {
        TotalexperienceP2 =
          +TotalexperienceP2 + +(index.pokemon.experience * index.quantity);

          trade.push(index);

        suporte = JSON.stringify(trade);
        localStorage.setItem("Trade", suporte);
        return history.push("/result");
      });
    }
  };

  return (
    <div className="TraderGlobalContent">
      <Player
        numPokemonTrade={numPokemonTrade1}
        setNumPokemonTrade={setNumPokemonTrade1}
      />
      <div className="TraderImgs">
        <img alt="Charmandr Pokemon" src={Charmaleon} />
        <img alt="Trade icon" src={TradeIcon} onClick={ValidTrade} />
      </div>
      <Player
        numPokemonTrade={numPokemonTrade2}
        setNumPokemonTrade={setNumPokemonTrade2}
      />
    </div>
  );
};

export default TradePage;
