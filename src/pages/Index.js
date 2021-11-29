import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={"Alisha Nanda's personal website. Software Engineer at Google "
    + 'and ex-intern at Facebook and Microsoft.'}
  >
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Alisha Nanda</h2>
        <p><a href="mailto:alishananda@gmail.com">alishananda@gmail.com</a></p>
      </header>
    </section>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hi, I&apos;m Alisha.</Link></h2>
          <p>
            Current Software Engineer, Future Masters Student.
          </p>
        </div>
      </header>
      <p>
        I am currently a software engineer at Google,
        with previous internships at Facebook and Microsoft. I love to learn
        new technologies and tackle ambiguity head-on. My work centers around
        networking, and I hope to pursue a masters in CS to further develop my
        networking expertise.
      </p>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
