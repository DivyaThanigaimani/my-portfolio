import {
  projectFive,
  projectFour,
  projectOne,
  projectThree,
  projectTwo,
} from "../assets/index";
export const navLinksdata = [
  {
    _id: 1001,
    title: "About",
    link: "about",
  },
  {
    _id: 1002,
    title: "Experience",
    link: "experience",
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
  },

  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];

export const workExperiences = [
  {
    _id: 1,
    title: "Software Engineer",
    subTitle: "DHL IT Services-(Oct 2020- Oct 2021) ",
    location: "CHENNAI, INDIA",
    description: [
      "Collaborated with a team of developers, contributed to technical discussions and conducted regular code reviews to maintain code quality standards to develop application using Java and Spring Boot Framework.",
      "Developed browser extension for automating task tracking, and integrated seamlessly with our existing project management tool, reducing manual data entry by 50% and ensuring accurate and up-to-date task tracking.",
      "Enhanced application performance by implementing a cache mechanism, resulting in improved page loading",
    ],
  },
  {
    _id: 2,
    title: "Professional 1 Application Delivery",
    subTitle: "DXC TECHNOLOGY- (Aug 2019 –Oct 2021)",
    location: "CHENNAI, INDIA",
    description: [
      "Collaborated with cross-functional teams to design and develop RESTful APIs using Java and Spring Boot.",
      "Owned development of HCM Solution that involved setting and tracking employee goals, conducting performance reviews, and providing feedback to employees using Java, React.",
      "Designed and established a robust Continuous Integration/Continuous Deployment (CI/CD) pipeline using Jenkins, automating the build, test, and deployment processes",
    ],
  },
  {
    _id: 3,
    title: "Lead Engineer",
    subTitle: "HCL TECHNOLOGIES - (Aug 2017 - Aug 2019)",
    location: "CHENNAI, INDIA",
    description: [
      "Leveraged SOLID principles and OOP concepts to design and develop progressive and hybrid web applications using React, Redux and Java, resulting in a 40% improvement in page load times.",
      "Developed, documented and executed comprehensive unit tests, resulting in a 30% reduction in bug incidents.",
      "Collaborated with the database team to optimize complex SQL queries, reducing query execution time by 50% and improving overall system performance.",
    ],
  },
  {
    _id: 4,
    title: "System Engineer",
    subTitle: "TATA CONSULTANCY SERVICES - (Jan 2014 - Jul 2017)",
    location: "CHENNAI, INDIA",
    description: [
      "Contributed to the design and deployment of secure payment services in Citi Bank, ensuring seamless transactions for millions of guests.",
      "Constructed a tool named Application Tracker, automatically triggered email notifications to project managers when usage of other applications reached 95% of overall size using Java.",
      
    ],
  },
];

export const projectsData = [
  {
    title: "Quote Generator(React)",
    des: " A Quote Generator App is a digital application that provides users with a curated selection of inspirational, motivational, or thought-provoking quotes.",
    src: projectThree,
    githubLink: "https://github.com/DivyaThanigaimani/QuoteGenerator",
    websiteLink: "https://divyat-quotegenerator.netlify.app/",
  },
  {
    title: "ADMIN DASHBOARD(React)",
    des: " React Admin Dashboard is a web-based project that provides a user-friendly interface for managing and visualizing data in a dynamic way. Users can interact with these components to perform tasks such as filtering, sorting, and searching data.",
    src: projectOne,
    githubLink: "https://github.com/DivyaThanigaimani/DashBoard",
    
  },
  {
    title: "To Do App(React)",
    des: " To-Do App is a digital tool designed to help users organize and manage tasks, activities. It allows individuals or teams to create, prioritize, and track their to-do lists efficiently.Utilised React ,Redux,Typescript",
    src: projectTwo,
    githubLink: "https://github.com/DivyaThanigaimani/ToDoList",
    websiteLink: "https://divyat-todoapp.netlify.app/",
  },
  
  {
    title: "MART FOR CHANGE (Java -Spring Boot Framework,React)",
    des: " To transport groceries to elderly and disabled individuals (Customers) in an effective manner, Mart for Change will act as a general solution. Agents and delivery personnel will have access to a user interface using this application. Customers place their grocery orders by calling agents, who then assign the orders to delivery personnel.",
    src: projectFour,
    githubLink: "https://github.com/DivyaThanigaimani/E-Commerce-MartForChange",
  },
  {
    title: "Web Search Engine(Java)",
    des: "A web page search engine is a tool that allows users to search for information on the internet by entering keywords or phrases.It uses advanced computing concepts such as Pattern Matching, HTML to TEXT, Web Scraper, Edit Distance, Ranking web pages using sorting, heaps or other data structures, and Using large dictionaries/datasets, sorting techniques, search trees, spellchecking keywords or HTML files, and many others.",
    src: projectFive,
    githubLink: "https://github.com/DivyaThanigaimani/WebSearchEngine",
  },
];
