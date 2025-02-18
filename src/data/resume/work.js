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
    startDate: "2023-06-01",
    summary:
      "After transitioning from Mrara Enterprises, I have been freelancing, delivering high-quality full stack development solutions to clients across various industries. My work spans mobile and web applications, with a focus on performance, scalability, and user experience.",
    highlights: [
      "Completed 15+ projects, delivering solutions to clients worldwide.",
      "Worked with clients from 10+ countries, gaining diverse international experience.",
      "Used React, Node.js, Firebase, and other modern technologies to create responsive applications.",
      "Collaborated with clients to define project scope, timelines, and deliverables.",
      "Optimized applications for performance, security, and scalability.",
      "Integrated different third-party services.",
      "Provided ongoing support and maintenance for client applications.",
    ],
  },
  {
    name: "Mrara Enterprises",
    position: "Full Stack Developer",
    url: "",
    startDate: "2021-12-01",
    endDate: "2023-06-01",
    summary:
      "Mrara Enterprises is a multi-services company based in Dallas, TX, dedicated to serving its community with a range of services, including car sharing, technology consulting, music creation, and more. The company specializes in custom software development, offering expert solutions across front-end, backend, database, and server technologies for both mobile and web applications.",
    highlights: [
      "Developed responsive web apps using React and Firebase.",
      "Managed data with Firebase Firestore and integrated real-time updates.",
      "Implemented Firebase Authentication for secure user login.",
      "Built serverless logic using Firebase Cloud Functions.",
      "Integrated Twilio for SMS notifications and communication.",
      "Implemented Skrill for secure payment processing.",
      "Integrated DocuSign for e-signature functionality.",
      "Optimized app performance and ensured scalability.",
      "Wrote unit tests and followed CI/CD best practices.",
    ],
  },
  {
    name: "Mrara Enterprises",
    position: "Full Stack Developer",
    url: "",
    startDate: "2021-12-01",
    endDate: "2023-06-01",
    summary:
      "Mrara Enterprises is a multi-services company based in Dallas, TX, dedicated to serving its community with a range of services, including car sharing, technology consulting, music creation, and more. The company specializes in custom software development, offering expert solutions across front-end, backend, database, and server technologies for both mobile and web applications.",
    highlights: [
      "Developed responsive web apps using React and Firebase.",
      "Managed data with Firebase Firestore and integrated real-time updates.",
      "Implemented Firebase Authentication for secure user login.",
      "Built serverless logic using Firebase Cloud Functions.",
      "Integrated Twilio for SMS notifications and communication.",
      "Implemented Skrill for secure payment processing.",
      "Integrated DocuSign for e-signature functionality.",
      "Optimized app performance and ensured scalability.",
      "Wrote unit tests and followed CI/CD best practices.",
    ],
  },
  {
    name: "Ephone",
    position: "React Developer",
    url: "https://ephone.app/",
    startDate: "2020-02-01",
    endDate: "2021-03-01",
    summary:
      "Ephone is a company that provides a comprehensive platform combining mobile money, banking, and telecom services across Africa, offering a unified solution to manage financial and communication needs.",
    highlights: [
      "Developed and optimized interactive user interfaces for web applications using React and Redux.",
      "Integrated RESTful APIs and WebSocket connections to enhance real-time features.",
      "Refactored legacy code to improve performance, maintainability, and scalability.",
      "Collaborated with designers to implement responsive and accessible UI components.",
      "Improved application state management, reducing unnecessary re-renders and API calls.",
      "Wrote unit and integration tests to ensure code quality and reliability.",
    ],
  },
  {
    name: "360Ground",
    position: "Frontend Engineer Intern",
    url: "https://360ground.com/",
    startDate: "2018-01-01",
    endDate: "2019-10-01",
    summary:
      "360Ground specializes in building high-performance, scalable, and compliant mobile and web applications, with a focus on eGovernment, enterprise, and banking solutions. With over 13 years of experience, the company has designed and implemented digital systems for governments, banks, and multinational organizations.",
    highlights: [
      "Developed and optimized UI components using React and Tailwind CSS for better performance and responsiveness.",
      "Collaborated with senior developers to implement interactive and user-friendly web interfaces.",
      "Worked with REST APIs to fetch and display dynamic content efficiently.",
      "Debugged and fixed UI issues, improving cross-browser compatibility.",
      "Enhanced website performance by optimizing assets and reducing load times.",
      "Implemented reusable components to improve code maintainability and scalability.",
      "Gained experience in Agile development, participating in daily stand-ups and code reviews.",
    ],
  },
];

export default work;
