import React from 'react';
import ProjectDisplay from './ProjectDisplay';
import { projects } from '../../../data/projectData';

const Projects = () => (
  <div id="projects">
    {projects.map((project) => (
      <ProjectDisplay project={project} key={project.id} />
    ))}
  </div>
);

export default Projects;
