import React from 'react';
import Headshot from '../assets/Bio/headshot.webp';

function About() {
  return (
    <div>
      <div className="headshot">
        <img src={Headshot} alt="My Headshot" />
      </div>
      <div className="bio-card">
        <p>
          {/* My name is Chelsea Avery and you will find me pictured here with one of many loves of my
          life: Sailor Jupiter the samoyed. */}
          I am a self-starting, full-stack developer hailing fromBoulder, CO. I grew up in Boulder
          and have since returned after many years in Denver, Chicago, and Seattle wherein I
          completed graduate school at Northwestern University and worked as a Speech-Language
          Pathologist specializing in neurorehabilitation.
        </p>
        <p>
          I have studied and worked in several fields, but my favorite work has always been during
          my Digital Design and Media certification from the{' '}
          <a href="https://www.colorado.edu/atlas/" alt="CU Boulder Atlas Institute">
            CU Boulder ATLAS Institute
          </a>
          : Technology, Arts, & Media (TAM) program. I really enjoyed learning about the foundations
          of design and web development in this program and am very excited to have returned to this
          realm again now.
        </p>

        <p>
          I adore rainy days, adventures, film and film music, studying interesting things, creating
          interesting things, reading, video games, and more. I am almost never bored. You can often
          find me enjoying these things by myself or with my family and friends. My mind is
          frequently at war with its love of both indoor and outdoor activities, introversion and
          extroversion, etc. This can also be explained by my favorite color, Indigo, which you can
          never really tell is Blue or Purple.
        </p>
        <p>
          If you would like to say hello or peek at my resume, send me a message at{' '}
          <a href="mailto:chelseaavery.js@gmail.com" alt="my e-mail">
            chelseaavery.js@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
