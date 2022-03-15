import React, { useEffect, useState } from "react";
import api from "../services/api";

const Player2 = () => {
    const [numPokemonTrade, setNumPokemonTrade] = useState([])

    const quantityPlayer2Trade = (quantity, pokemon) => {
        numPokemonTrade.map((index) => {
            if(index.pokemon.name === pokemon.name){
                return numPokemonTrade.splice(numPokemonTrade.indexOf(index), 1);
                
            }
            return numPokemonTrade;
        });
        console.log(quantity);
        setNumPokemonTrade((numPokemonTrade) => [
            ...numPokemonTrade,
            {
                pokemon, 
                quantity, 
            },
        ]);
    };
    const [pokemon, setPokemon] = useState([]);
    

    

    useEffect(() => {
        const getPokemons = async () => {
            try {
                var numPlayer1 = [];
                setPokemon([]);

                for(var i = 0; i<8; i++ ){
                    const randomNums = Math.random();
                    const mult = randomNums * 300;
                    const resp  = Math.floor(mult)

                    if(resp>0){
                        numPlayer1.push(resp);
                    }
                    else if(resp < 0 ){
                        i--;
                    }
                }

                numPlayer1.map(async (index) => {
                    const response = await api.get(`/${index}`);
                    setPokemon((pokemon) => [
                      ...pokemon,
                      {
                        name: response.data.name,
                        experience: response.data.base_experience,
                        games: response.data.game_indices.length,
                      },
                    ]);
                  });
                } catch (error) {
                  alert("Ocorreu um erro!");
                }
              };
              
        getPokemons();
    } ,[])



    return(
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
                                onChange={(e) => quantityPlayer2Trade(e.target.value, item)}
                            />
                        </div>
                    </div>
                ))}

            </div>
    )
}

export default Player2;