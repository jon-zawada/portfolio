import React from 'react';
import { render } from 'react-dom';
import { projects } from '../../../data/projectData';

const ProjectInfo = ({ match }) => {
  const fetchProject = (id) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === Number(id)) {
        return projects[i];
      }
    }
    return null;
  };
  const project = fetchProject(match.params.id);
  console.log(project);
  return (
    <div className="project-info">
      <img src={project.gif} alt="" />
      <div>{project.name}</div>
    </div>
  );
};

export default ProjectInfo;
