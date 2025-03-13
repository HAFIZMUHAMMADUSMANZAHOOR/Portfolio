import React from "react";
import img1 from './Imges/usman.jfif'
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a Full-Stack Developer specializing in Web Design, SEO, and Machine Learning.</p>
      </div>
      <div className="home-image">
        <img src={img1} alt="Portfolio" />
      </div>
    </section>
  );
};

export default Home;
