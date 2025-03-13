import React from 'react';
// import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Bone Fracture Detection System</h3>
        <p>A deep learning-based web application to detect bone fractures from X-ray images.</p>
      </div>
      <div className="project-card">
        <h3>Weather Prediction App</h3>
        <p>Machine learning-based web app that predicts weather conditions using real-time data.</p>
      </div>
      <div className="project-card">
        <h3>School Finder App</h3>
        <p>React and Node.js web app to search and find schools based on location and preferences.</p>
      </div>
    </section>
  );
};

export default Projects;
