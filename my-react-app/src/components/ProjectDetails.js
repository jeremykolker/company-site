import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="project-details">
      <h2>Project Details</h2>
      <p>Project ID: {id}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        suscipit mauris, vitae faucibus neque pellentesque at. Quisque mollis
        nisi eu lorem lacinia, quis varius enim scelerisque. Donec vitae felis
        eget erat ultrices porttitor.
      </p>
    </div>
  );
};

export default ProjectDetails;
