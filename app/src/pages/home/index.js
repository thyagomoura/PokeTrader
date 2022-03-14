import '../../styles/home.css';
import Charmander from '../../assets/charmander.png';
import { Link } from "react-router-dom";

function homePage(){
    return(
        <div className="HomeGlobalContainer">
            
            <div className="HomeContentBox">
                <div className="HomeImg">
                    <img alt="Charmander Pokemon" src={Charmander}/>
                </div>
                <div className="Message">
                    <p>Olá, seja Bem Vindo ao Poke Trade!!</p> 
                    <p>
                        Funciona assim:<br/>
                        1. O primeiro jogador vai ofertar entre 1 e 6 pokemons e o segundo jogador tambem.<br/><br/>
                        Qualquer combinação é valida!<br/><br/>

                        2. Uma troca é considerada justa, se a soma das bases de experiencia dos pokemons de cada lado da troca é próxima uma da outra.
                    </p>
                    Ok, vamos lá então??
                </div>
                <div className="HomeButtonBox">
                    <Link style={{ textDecoration: "none" }} to={{ pathname: "/trade" }}>
                        <button type="button" className="HomeButton">
                            START
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default homePage;