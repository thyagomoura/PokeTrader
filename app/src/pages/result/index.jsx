import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/result.css";
import Charizard from "../../assets/charizard.png";
import History from '../../components/History/History.jsx'

function ResultPage() {
  let basePlayer1 = localStorage.getItem("TotalBaseExperiencePlayer1");
  let basePlayer2 = localStorage.getItem("TotalBaseExperiencePlayer2");
  let valid = true;

  const calculateBaseExperience = () => {
    let Abstractresult = Math.abs(basePlayer1 - basePlayer2);

    if (Abstractresult > 75) {
      valid = false;
      localStorage.setItem('ValidTrade', valid);
      return valid;
    } else if (Abstractresult < 75) {
      valid = true;
      localStorage.setItem('ValidTrade', valid);
      return valid
    }
  };

  useEffect(() => {
    calculateBaseExperience();
  },);
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
