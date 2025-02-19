/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: "Freelancing",
    position: "Full Stack Developer",
    url: "",
    startDate: "2024-08-01",
    summary:
      "As a freelance full-stack developer, I have successfully delivered scalable and high-performing web and mobile applications to clients worldwide, ensuring top-tier user experience and business efficiency.",
    highlights: [
      "Completed 15+ projects for clients across 10+ countries, enhancing global business operations.",
      "Developed web and mobile applications using React, Node.js, Firebase, and other modern technologies, reducing client deployment time by 40%.",
      "Optimized application performance, reducing load times by up to 60% through efficient state management and API optimizations.",
      "Integrated third-party services, streamlining client operations and improving automation.",
      "Collaborated closely with clients to define project scope, reducing requirement changes by 30% through proactive planning.",
      "Provided long-term maintenance and support, ensuring 99.9% application uptime.",
    ],
  },
  {
    name: "Mrara Enterprises",
    position: "Full Stack Developer",
    url: "",
    startDate: "2021-05-01",
    endDate: "2024-06-01",
    summary:
      "Developed and maintained software solutions for Mrara Enterprises, a Dallas-based company specializing in car-sharing, technology consulting, and custom software development.",
    highlights: [
      "Designed and implemented a car-sharing web platform using React and Firebase, increasing customer bookings by 35%.",
      "Managed 50K+ real-time data transactions per month using Firebase Firestore, ensuring 99.99% uptime.",
      "Integrated secure authentication via Firebase Authentication, reducing unauthorized access incidents by 80%.",
      "Developed serverless business logic with Firebase Cloud Functions, automating 70% of manual processes.",
      "Implemented Skrill payment gateway, enabling seamless transactions with a 0% fraud rate.",
      "Integrated third-party services (Stripe, Twilio, Firebase, and more), streamlining digital contract signing and reducing processing time by 50%.",
      "Optimized app performance by reducing unnecessary API calls, improving load times by 45%.",
      "Wrote unit and integration tests, reducing production bugs by 30% and enhancing system stability.",
    ],
  },
  {
    name: "Ephone",
    position: "React Developer",
    url: "https://ephone.app/",
    startDate: "2020-02-01",
    endDate: "2021-03-01",
    summary:
      "Developed interactive and high-performance user interfaces for Ephone, a mobile money and telecom platform serving millions across Africa.",
    highlights: [
      "Revamped the front-end UI using React and Redux, improving load times by 50% and increasing user engagement.",
      "Integrated RESTful APIs and WebSockets for real-time transaction updates, reducing latency by 40%.",
      "Refactored legacy code, improving code maintainability and reducing page load failures by 25%.",
      "Enhanced state management efficiency, reducing unnecessary API calls by 30%.",
      "Collaborated with designers and backend engineers to implement a seamless UI/UX experience, boosting conversion rates by 20%.",
      "Developed unit and integration tests, reducing deployment-related bugs by 35%.",
    ],
  },
  {
    name: "360Ground",
    position: "Frontend Engineer Intern",
    url: "https://360ground.com/",
    startDate: "2018-01-01",
    endDate: "2019-10-01",
    summary:
      "Interned at 360Ground, contributing to enterprise-level web applications for banking, eGovernment, and multinational clients.",
    highlights: [
      "Developed reusable React components, reducing frontend development time by 25%.",
      "Collaborated with a team of senior developers to build scalable UI solutions using Tailwind CSS, improving UI responsiveness by 40%.",
      "Worked with REST APIs to fetch and render real-time data, improving data consistency across platforms.",
      "Optimized assets and reduced load times by 35%, enhancing website performance and SEO rankings.",
      "Resolved cross-browser compatibility issues, increasing accessibility for 95% of users across multiple devices.",
      "Participated in Agile sprints, contributing to daily stand-ups and code reviews to enhance development workflows.",
    ],
  },
];

export default work;
