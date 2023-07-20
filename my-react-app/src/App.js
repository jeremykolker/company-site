import React, { useState, useEffect } from "react";
import "./App.css";

const museumsData = [
  "Metropolitan Museum of Art",
  "Museum of the City of New York",
  "Brooklyn Museum",
  "The Frick Museum",
  "Boston Museum of Fine Art",
  "Seattle Museum of Art",
  "Getty Museum of Art",
];

const App = () => {
  const [museums, setMuseums] = useState([]);
  const [visibleMuseums, setVisibleMuseums] = useState(3);

  useEffect(() => {
    loadMuseums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMuseums = () => {
    // Simulate API call or loading from a server.
    const slicedMuseums = museumsData.slice(0, visibleMuseums);
    setMuseums(slicedMuseums);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setVisibleMuseums((prevVisibleMuseums) => prevVisibleMuseums + 3);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="navbar">
        <h1>Traditional Line</h1>
      </header>
      <main className="content">
        <div className="home">
          <h2>Welcome to Traditional Line Ltd.</h2>
          <p>
            Established in 1984, Traditional Line is a general contractor and architectural restorer with a long history of historic preservation for museums and civic and cultural institutions. We take pride in our exceptional reputation, technical expertise, and ability to manage projects of any size while guaranteeing consistency in quality and efficient problem-solving and scheduling.
          </p>
          <p>
            Our attention to detail and workmanship is unparalleled, and we specialize in creative solutions and custom work. We employ an in-house staff of project managers, carpenters, wood finishers, specialized workers, helpers, and an administrative team, ensuring personal attention for every project.
          </p>
          <p>
            Traditional Line has considerable experience across the spectrum of design and implementation, from restoring historic woodwork to installing the most current lighting, audio-video, and mechanical systems. We also provide long-term service work and maintenance to our clients.
          </p>
          <p>
            Explore our website to learn more about our services and the museums and clubs we've had the privilege to work with.
          </p>
        </div>
        <div className="projects">
          <h2>Museums Traditional Line Has Worked At</h2>
          <ul>
            {museums.map((museum, index) => (
              <li key={index}>{museum}</li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Traditional Line Ltd.</p>
      </footer>
    </div>
  );
};

export default App;
