import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me.jpg" alt="" />
      </Link>
      <header>
        <h2>Ababu Alemu</h2>
        <p>
          <a href="mailto:ababu.al444@gmail.com">ababu.al444@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Ababu. I am an <a href="https://www.aait.edu.et/">AAiT</a>{" "}
        graduate and a Fullstack web developer. I specialize in frontend
        development with React, Redux Toolkit, and Tailwind CSS, as well as
        backend development with Node.js. Currently, I&apos;m diving deeper into
        machine learning and system design to build scalable and intelligent
        applications.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Ababu Alemu <Link to="/">ababu.dev</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
