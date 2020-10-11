import React from 'react';

const BulletList = ({ bullets }) => (
  <div className="list-wrapper">
    <ul className="bullet-list">
      {bullets.map((bullet, i) => (
        <li className="bullets" key={i}>{bullet}</li>
      ))}
    </ul>
  </div>
);

export default BulletList;
