import React, { useEffect, useState } from "react";
import api from "../../services/api";
import '../../styles/trader.css'
import Charmaleon from '../../assets/charmaleon.png'
import TradeIcon from '../../assets/tradeIcon.png'

const TradePage = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const loadPokemons = async () => {
            try {
                const response = await api.get(`${1}`);
                setPokemon((pokemon) => [
                ...pokemon,
                {
                    name: response.data.name,
                    experience: response.data.base_experience,
                    games: response.data.game_indices.length,
                },
            ]);
            } catch (error) {
                alert("Ocorreu um erro!");
            }
        }
        loadPokemons();
    } ,[])


    return(
        <div className="TraderGlobalContent">
            <div className="TraderContentBox1">
                <h3>Player 1</h3>
            {pokemon &&
                pokemon.map((item, index) => (
                    <div className="PokemonBox">
                        <div className="PokemonInfos">
                            <p>Nome: {item.name}</p>
                            <p>Base experince: {item.experience}</p>
                        </div>
                        <div className="PokemonNums">
                            <p>n°{item.games}</p>
                            <input
                                className="PokeNumsInput"
                                type="number"
                                min="0"
                                max="6"
                            />
                        </div>
                    </div>
                ))}

            </div>
            <div className="TraderImgs">
                <img alt="Charmandr Pokemon" src={Charmaleon}/>
                <img alt="Changes " src={TradeIcon}/>
            </div>
            <div className="TraderContentBox1">
                <h3>Player 2</h3>
            {pokemon &&
                pokemon.map((item, index) => (
                    <div className="PokemonBox">
                        <div className="PokemonInfos">
                            <p>Nome: {item.name}</p>
                            <p>Base experince: {item.experience}</p>
                        </div>
                        <div className="PokemonNums">
                            <p>n° {item.games}</p>
                            <input
                                className="PokeNumsInput"
                                type="number"
                                min="0"
                                max="6"
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TradePage;