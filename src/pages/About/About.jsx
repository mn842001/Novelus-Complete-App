import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <div className='container'>
      <section className='about'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Novelus</h2>
            <p className='fs-17'>Welcome to Novelus! At our core, we are dedicated to enriching your reading experience.
             Our platform empowers users to effortlessly explore a vast array of books, spanning every imaginable subject and genre. </p>

            <p className='fs-17'>Dive into detailed book descriptions, immerse yourself in captivating narratives, 
            and if a book resonates with you, easily save it to your personal favorites list for future reading. 
            Discover, explore, and indulge in the world of literature with Novelus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
