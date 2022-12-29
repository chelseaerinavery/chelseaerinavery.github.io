import React from 'react';

function About() {
  return (
    <div id="bio-container">
      <div id="bio-background-wrapper">
        <section className="bio-background" />
      </div>
      <section className="bio-card">
        <p>
          I am a self-starting, full-stack developer hailing from Boulder, CO. I have studied and
          worked in several fields, but my favorite work has always been during my Digital Design
          and Media certification from the{' '}
          <a href="https://www.colorado.edu/atlas/" alt="CU Boulder Atlas Institute">
            CU Boulder ATLAS Institute
          </a>
          : Creative Technology & Design (CTD) program. I greatly enjoyed my time learning about
          design principles, computer science, and web development in this program and am very
          excited to have returned to this realm again now. Prior to my career as a software
          engineer, I obtained my master's degree in speech, language, & learning from Northwestern
          University and worked as an acute care Speech-Language Pathologist specializing in
          neurorehabilitation. I carry over a deep understanding of and interest in language
          (including syntax) and networks (neural vs. computer).
        </p>

        <p>
          I adore rainy days, adventures, film and film music, studying interesting things, creating
          interesting things, reading, video games, my very fluffy best friend{' '}
          <a
            href="https://www.instagram.com/sailorjupiter_samoyed/"
            alt="My Dog Jupiter's instagram">
            Sailor Jupiter
          </a>{' '}
          and more. I am almost never bored. You can often find me enjoying these things by myself
          or with my family and friends. My mind is frequently at war with its love of both indoor
          and outdoor activities, introversion and extroversion, etc. This can also be explained by
          my favorite color (Indigo === Blue && Purple).
        </p>
        <p>
          If you would like to say hello or peek at my resume, send me a message at{' '}
          <a href="mailto:chelseaavery.js@gmail.com" alt="my e-mail">
            chelseaavery.js@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default About;
