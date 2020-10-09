import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDisplay = ({ project }) => (
    <div className="display">
      <Link to={`/projects/${project.id}`} className="display-link">
        <img src={project.icon} alt="" className="project-display-img" />
        <h3 className="project-display-text">{project.name}</h3>
      </Link>
    </div>
);

export default ProjectDisplay;
