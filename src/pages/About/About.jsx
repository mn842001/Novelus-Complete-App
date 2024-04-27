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
            <p className='fs-17'>Welcome to Novelus! At our core, we're all about celebrating the joy of reading and the beauty of books.
              We believe that every book holds a special place in our hearts, and our mission is to help you discover and collect your favorite reads.</p>

            <p className='fs-17'>Whether it's a gripping mystery, a heartwarming romance, or an insightful memoir,
             we're here to support your literary journey every step of the way. Our app is designed to make it easy for you to explore new titles, 
             connect with like-minded readers, and build your own collection of beloved books.
              Happy reading!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
