import React from 'react';

const ProjectMediaLinks = ({ github, youtube }) => (
  <div>
    {github ? (
      <a href={github} target="_blank" rel="noreferrer">
        <img src="/images/github.svg" alt="" className="filter-main-color" />
      </a>
    ) : null}
    {youtube ? (
      <a href={youtube} target="_blank" rel="noreferrer">
        <img src="/images/youtube.svg" alt="" className="filter-main-color" />
      </a>
    ) : null}
  </div>
);

export default ProjectMediaLinks;
