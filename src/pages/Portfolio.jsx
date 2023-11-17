import React from "react";
import ProjectCard from '../Components/ProjectCard'

const Portfolio = () => {
    const projects = [{
        title: 'Project 1',
        description: 'this is the description'
    }, {
        title: 'Project 2',
        description: 'this is the description 2.0'
    },
    {
        title: 'Project 3',
        description: 'this is the description 3.0'
    }]



    return (
        <div>
            <h1>Portfolio</h1>
            <p>This is the portfolio page.</p>
            {projects.map((project) => (
                <>
                <ProjectCard title={project.title} description={project.description} />
                </>
            ))}
        </div>
    );
}

export default Portfolio;