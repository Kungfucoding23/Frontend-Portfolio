import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css';

const Portfolio = () => {
    const [projects, setProjects] = useState({});
    //llamada a la API utilizando axios
    useEffect(() => {
        //aca despues va la direccion de heroku pero por el momento uso el local
        axios.get('https://backend-ale-portfolio.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )}, [setProjects]);
    return(
        <>
            <div className="mega-card-portfolio">
                {projects.length > 0 && projects.map((project, index) =>                         
                    <div className="individual-card" key={index}>
                        <h1>{project.name}</h1>
                        <p>{project.descripcion}</p>
                        <img className="project-image" alt="project" src={project.image}></img>
                        <a className="btn-visit" href={project.link}>Visitar Proyecto</a>
                    </div>
                )}
            </div>
        </>
    )
};

export default Portfolio;