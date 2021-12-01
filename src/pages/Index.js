import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Pdf from '../static/AlishaNandaResume2021.pdf';

const Index = () => (
  <Main
    description={"Alisha Nanda's personal website. Software Engineer at Google "
    + 'and ex-intern at Facebook and Microsoft.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">Hi, I&apos;m Alisha.</h2>
          <p>
            Current Software Engineer, Future Masters Student.
          </p>
        </div>
      </header>
      <p>
        Welcome to my website! Feel free to read more <Link to="/about">about me</Link>,
        check out my {' '} <Link to="/resume">resume</Link> and {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
      <ul className="actions">
        <li>
          <a href={Pdf} target="_blank" rel="noreferrer" className="button">Download Resume</a>
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
