import React from "react";

const Projects = () => {
  const museums = [
    "Metropolitan Museum of Art",
    "Museum of the City of New York",
    "Brooklyn Museum",
    "The Frick Museum",
    "Boston Museum of Fine Art",
    "Seattle Museum of Art",
    "Getty Museum of Art",
  ];

  return (
    <div className="projects">
      <h2>Museums Traditional Line Has Worked At</h2>
      <ul>
        {museums.map((museum, index) => (
          <li key={index}>{museum}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
