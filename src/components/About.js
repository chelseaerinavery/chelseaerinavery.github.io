import React from 'react';
import Headshot from '../assets/Bio/headshot.webp';

function About() {
  return (
    <div className="bio">
      <div className="bio-card">
        <img src={Headshot} alt="My Headshot" />
        <p>
          My name is Chelsea Avery. I was born in Boulder, CO and have lived in Colorado most of my
          life. I have also lived in Hawaii, Paris, Chicago, and Seattle. I left Colorado for grad
          school in Chicago from 2017-2019 and then lived in Seattle before returning to Colorado in
          2020. During that time, my career focus revolved around Speech-Language Pathology
          specializing in neurorehabilitation.
        </p>
        <p>
          Growing up and going to school in Boulder, CO - a place that is all about progressive
          movements, art, and the outdoors - has led to me becoming a very versatile person. I
          studied the Humanities with emphases in Film and French, and received a Technology, Arts,
          & Media (TAM) certificate from the University of Colorado Boulder. I really enjoyed
          learning about the foundations of design and web development in the TAM program and am
          very excited to be returning to that realm again now.
        </p>

        <p>
          I adore rainy days, adventures, film and film music, studying interesting things, creating
          interesting things, reading, video games, and more. I am almost never bored. You can often
          find me enjoying these things by myself or with my family and friends. My mind is
          frequently at war with its love of both indoor and outdoor activities, introversion and
          extroversion, etc. This can also be explained by my favorite color, Indigo, which you can
          never really tell is Blue or Purple.
        </p>
      </div>
      {/* <h1>Aside from coding, I love:</h1> */}
    </div>
  );
}

export default About;
