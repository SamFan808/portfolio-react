import React from "react";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Languages and Technologies Used:</strong> {props.language}
          </li>
        </ul>
        <div className="img-container">
          <img alt={props.name} src={props.image} className="proj" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
