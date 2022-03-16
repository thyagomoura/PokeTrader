import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/result.css";
import Charizard from "../../assets/charizard.png";
import History from '../../components/History.jsx'

function ResultPage() {
  //   var save = JSON.parse(localStorage.getItem("Trade"));
  let basePlayer1 = localStorage.getItem("TotalBaseExperiencePlayer1");
  let basePlayer2 = localStorage.getItem("TotalBaseExperiencePlayer2");
  let valid = true;

  //   save.map((index) => {
  //     if (index !== undefined) {
  //       console.log(index.quantity);
  //     } else {
  //       console.log(index.pokemon);
  //     }
  //     return 0;
  //   });
  const calculateBaseExperience = () => {
    let Abstractresult = Math.abs(basePlayer1 - basePlayer2);

    if (Abstractresult > 75) {
      valid = false;
      return valid;
    } else if (Abstractresult < 75) {
      return (valid = true);
    }
  };

  useEffect(() => {
    calculateBaseExperience();
    console.log(calculateBaseExperience()); // this will fire on every change :(
  }, []);
  return (
    <div className="ResultGlobalContent">
        <History/>
      <div className="ResultTextButton">
        {calculateBaseExperience() && calculateBaseExperience() ? (
          <div className="ResultText">
            <p>
              <strong>A troca é justa!</strong> A experiencia base dos pokemons
              escolhidos pelos
              <br />
              players estão por volta de 75 de diferença
            </p>
          </div>
        ) : (
          <div className="ResultText">
            <p>
              <strong>A troca não é justa!</strong> A experiencia base dos
              pokemons escolhidos
              <br />
              pelos players estão por volta de 75 de diferença
            </p>
          </div>
        )}
        <div className="ResultButtonJogar">
          <Link style={{ textDecoration: "none" }} to={{ pathname: "/" }}>
            <button className="ButtonResult">Jogar novamente</button>
          </Link>
        </div>
      </div>
      <div className="ResultImg">
        <img alt="Charizard pokemon" src={Charizard} />
      </div>
    </div>
  );
}

export default ResultPage;
