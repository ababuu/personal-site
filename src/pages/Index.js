import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main description="Ababu's personal website. AAiT graduate and freelance software developer. Previously worked at Mrara Enterprises and 360 Media Ground. Experienced in frontend (React, Redux Toolkit, Tailwind CSS) and backend (Node.js). Currently exploring machine learning and system design.">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A minimalistic, responsive, statically-generated, react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. Please feel free to read more{" "}
        <Link to="/about">about me</Link>, or you can check out my{" "}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{" "}
        view <Link to="/stats">site statistics</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {" "}
        Source available{" "}
        <a href="https://github.com/ababuu/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
