import React from "react";
import { Link } from "react-router-dom";
import "../../styles/result.css";
import Charizard from "../../assets/charizard.png";

function ResultPage() {
  var save = JSON.parse(localStorage.getItem("Trade"));
  save.map((index) => {
    if (index !== undefined) {
      console.log(index.pokemon);
    } else {
      console.log(index.pokemon);
    }
  });

  return (
    <div className="ResultGlobalContent">
      <div className="ResultTextButton">
        <div className="ResultTextContent">troca boa ein</div>
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
