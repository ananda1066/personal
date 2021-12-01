import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Alisha Nanda</h2>
        <p><a href="mailto:alishananda@gmail.com">alishananda@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I am currently a software engineer at Google,
        with previous internships at Facebook and Microsoft. I love to learn
        new technologies and tackle ambiguity head-on. My work centers around
        networking, and I hope to pursue a masters in CS to further develop my
        networking expertise.
      </p>
      <ul className="actions">
        <li>
          <a href="AlishaNandaResume2021.pdf" className="button">Download Resume</a>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alisha Nanda <Link to="/">ananda1066.github.io/personal</Link>.</p>
    </section>
  </section>
);

export default SideBar;
