import React, {useState, useEffect} from "react";
import "../../App.css";
import "./card.css";
import axios from 'axios';

//React strap would not work for me so I created my own card.

const Card = (props) => {
  return (
    <div className="card">
        <div className="cardHead border">
            <h3>{props.title}</h3>
            <span>{props.date}</span>
        </div>
        <div className="cardBody border">
            <img src={props.img} />
        </div>
        <div className="cardHead">
            <hr></hr>
            <p className="desc">{props.desc}</p>
        </div>
    </div>
  );
}

export default Card;
