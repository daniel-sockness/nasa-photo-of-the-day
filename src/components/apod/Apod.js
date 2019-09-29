import React, {useState, useEffect} from "react";
import "../../App.css";
import axios from 'axios';
import Card from './ApodCard';



const Apod = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=NxAgBgvA3k65iryouaHjqmijut7m1aYkELPp31Gz")
        .then(result => {
          setData(result.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
          
    console.log(data);
  return (
    <Card title={data.title} desc={data.explanation} img={data.url} date={data.date}/>
  );
}

export default Apod;
