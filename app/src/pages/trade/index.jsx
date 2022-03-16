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

  var trade = [];
  var suporte = "";
  let TotalExperienceP1=0;
  let TotalExperienceP2=0;

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
        //set localStorage player 1
        if (Array.isArray(trade)) {
          TotalExperienceP1 =
            +TotalExperienceP1 + +(index.pokemon.experience * index.quantity);
            localStorage.setItem('TotalBaseExperiencePlayer1',TotalExperienceP1);
          trade.push(index);
          return trade;
        }
        return 0;
      });

      //set localStorage player 2
      numPokemonTrade2.map((index) => {
        TotalExperienceP2 =
          +TotalExperienceP2 + +(index.pokemon.experience * index.quantity);
          localStorage.setItem('TotalBaseExperiencePlayer2',TotalExperienceP2);
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
