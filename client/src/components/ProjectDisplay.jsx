import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDisplay = ({ project }) => (
  <Link to={`/${project.id}`} className="display-link">
    <div className="display">
      <img src={project.icon} alt="" className="project-display-img" />
      <h5 className="project-display-text">{project.name}</h5>
    </div>
  </Link>
);

export default ProjectDisplay;
