import React from 'react';
import { render } from 'react-dom';
import MediaLinks from './MediaLinks';
import BulletList from './BulletList';
import ProjectMediaLinks from './ProjectMediaLinks';
import data, { projects } from '../../../data/projectData';
import { techUsed } from '../../../helper/helpers';

const ProjectInfo = ({ match }) => {
  const project = data[match.params.id];
  return (
    <div className="project-info-wrapper">
      <div className="project-info">
        <img src={project.gif} alt="" className="img-info" />
        <div className="text-info">
          <h1 className="info-header">{project.name}</h1>
          <h3 className="project-description">{project.description}</h3>
          <h6 className="tech-used">
            Technologies used: {techUsed(project.tech)}
          </h6>
          <ProjectMediaLinks github={project.github} youtube={project.youtube} />
        </div>
      </div>
      <BulletList bullets={project.bullets} />
    </div>
  );
};

export default ProjectInfo;
