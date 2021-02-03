import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './About.css';

const About = () => {
    const [info, setInfo] = useState({});
    //llamada a la API utilizando axios
    useEffect(() => {
        //aca despues va la direccion de heroku pero por el momento uso el local
        axios.get('https://backend-ale-portfolio.herokuapp.com/about')
        .then(
            res => setInfo(res.data[0])
        )}, [setInfo]);
    return(
        <div className="About">
            <div className="div-photo">
                <img className="profile" alt="ProfilePicture" src={info.photo}></img>
            </div>
            <div className="Description">
                <h1>{info.name}</h1>
                <h2>{info.profession}</h2>
                <p>{info.about_me}</p>
                <ul className="skills">
                    <h3>Skills:</h3>
                    {info.skills && info.skills.map((skill, index) => 
                        <p className="skill" key={index}>{skill}</p>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default About;