import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Alisha Nanda's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I like. More available on my <a href="https://github.com/ananda1066" target="_blank" rel="noreferrer">Github page</a>.</p>
        </div>
      </header>
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3><a href="https://github.com/grpc/grpc" target="_blank" rel="noreferrer">gRPC</a></h3>
            <time className="published">July 2020 - Present</time>
          </header>
          <a href="https://github.com/grpc/grpc" target="_blank" rel="noreferrer" className="image">
            <img src={`${process.env.PUBLIC_URL}/images/projects/grpc.jpg`} alt="Current work" />
          </a>
          <div className="description">
            <p> I currently work on gRPC C++ as part of my job, specifically
              focusing on performance improvements and feature requests from internal customers.
              For instance, I recently wrote an open-source guide on best performance
              practices for gRPC (<a href="https://grpc.io/docs/guides/performance/" target="_blank" rel="noreferrer">link to guide</a>).
            </p>
          </div>
        </article>
      </div>
      <div className="cell-container">
        <article className="mini-post">
          <header>
            <h3><a href="https://github.com/Theacalix/JEANIDatabase" target="_blank" rel="noreferrer">JEANI Database</a></h3>
            <time className="published">January 2020 - March 2020</time>
          </header>
          <a href="https://github.com/Theacalix/JEANIDatabase" target="_blank" rel="noreferrer" className="image">
            <img src={`${process.env.PUBLIC_URL}/images/projects/ucdavis.png`} alt="ECS 165A Project" />
          </a>
          <div className="description">
            <p> I worked with 4 classmates on a database from start to finish as
              our quarter-long project for ECS 165A (Databases). This included
              adding features such as table/page structure, querying/indexing, merging dirty pages,
              and concurrency. I implemented querying and indexing (using a
              B-tree), and pair-programmed an implementation of QUECC (
              <a href="https://expolab.org/papers/quecc.pdf" target="_blank" rel="noreferrer">research paper link</a>
              ), an experimental concurrency database architecture focused on low and high
              priority queues.
            </p>
          </div>
        </article>
      </div>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
