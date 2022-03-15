import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/trader.css'
import Charmaleon from '../../assets/charmaleon.png'
import TradeIcon from '../../assets/tradeIcon.png'
import Player1 from '../../components/Player1'
import Player2 from '../../components/Player2'

const TradePage = () => {
    return(
        <div className="TraderGlobalContent">
            <Player1/>
            <div className="TraderImgs">
                <img alt="Charmandr Pokemon" src={Charmaleon}/>
                <Link style={{ textDecoration: "none" }} to={{ pathname: "/result" }}>
                    <img alt="Changes " src={TradeIcon}/>
                </Link>
            </div>
            <Player2/>
        </div>
    )
}

export default TradePage;