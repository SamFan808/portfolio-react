import React from "react";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="content">
        <h5>{props.name}</h5>
        <ul>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Languages and Technologies Used:</strong> {props.language}
          </li>
          <li>
            <strong>Link to repo:</strong>{" "}
            <a href={props.url} target="#blank">
              {props.url}
            </a>
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
