import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Projects = () => {
  const [projects, setProjects] = useState([...Array(10).keys()]);
  const fetchMoreData = () => {
    // Simulating the fetching of more data.
    setTimeout(() => {
      setProjects((prevProjects) => [
        ...prevProjects,
        ...Array(5).fill(0).map((_, index) => index + prevProjects.length),
      ]);
    }, 1500);
  };

  return (
    <div className="projects">
      <h2>Construction Projects</h2>
      <InfiniteScroll
        dataLength={projects.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {projects.map((project) => (
          <div className="project" key={project}>
            <h3>Project {project}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod suscipit mauris, vitae faucibus neque pellentesque at.
            </p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Projects;
