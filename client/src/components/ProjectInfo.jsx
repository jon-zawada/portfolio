import React from 'react';
import { render } from 'react-dom';
import data, { projects } from '../../../data/projectData';

const ProjectInfo = ({ match }) => {
  const project = data[match.params.id];
  return (
    <div className="project-info-wrapper">
      <div className="project-info">
        <img src={project.gif} alt="" className="img-info" />
        <div className="text-info">
          <h1 className="info-header">{project.name}</h1>
          <h3>{project.description}</h3>
          <h6>Technologies used: </h6>
        </div>
      </div>
      <div className="list-wrapper">
        <ul className="bullet-list">
          {project.bullets.map((bullet) => (
            <li className="bullets">{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfo;
