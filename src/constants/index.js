import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
  irc,
  courier,
  aspenku,
  wardaya,
  cms,
  rafas,
} from "../assets";

export const navLinks = [
  // {
  //   id: "about",
  //   title: "About",
  // },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Monster Group",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2022 - February 2023",
    points: [
      "Collaborate with the design team to translate user requirements into a visually appealing and functional web application using React.js",
      "Build reusable React components and implement them in the CMS to enable fast and efficient development of new features",
      "Optimized the application for fast loading and improved user experience .",
      "Worked with the UX team to develop wireframes and prototypes for new features",
      "Participate in code reviews to ensure high-quality and maintainable code",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Aplikasi Penunjang Ekonomi Nasional",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Agustus 2020 - January 2022",
    points: [
      "Develop a user-friendly and responsive front-end interface using React.js",
      "Implement search engine optimization (SEO) techniques to ensure that the website is easily discoverable by search engines",
      "Collaborate with the back-end development team to ensure seamless integration between the front-end and the back-end",
      "Build reusable React components and implement them in the website to enable fast and efficient development of new features",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Wardaya College",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - Juli 2020",
    points: [
      "Implement search engine optimization (SEO) techniques to ensure that the website is easily discoverable by search engines",
      "Develop and implement a content management system (CMS) using React.js to allow the client to easily manage the content of the website.",
      "Collaborate with the back-end development team to ensure seamless integration between the front-end and the back-end.",
      "Develop a user-friendly and responsive front-end interface",
    ],
  },
];

const projects = [
  {
    name: "Website for Online Learning",
    description:
      "Wardaya Online is an online learning platform that offers a variety of courses and educational resources for users. The platform aims to provide high-quality education to students in Indonesia and beyond, with courses ranging from language learning to professional development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: wardaya,
    source_code_link: "https://wardayaonline.com/",
  },
  {
    name: "Website for Information ",
    description:
      "The project is a website that provides information about events and activities held by Wardaya. The website aims to be a hub of information for users who are interested in attending events hosted by Wardaya, providing details such as event descriptions, dates, times, and locations..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: irc,
    source_code_link: "https://irc.wardayaonline.com/",
  },
  {
    name: "Marketplace",
    description:
      "The project is an online marketplace platform that connects UMKM , with customers. The platform is designed to provide a space for UMKM sellers to showcase and sell their products or services to a wider audience, while also providing customers with a diverse range of products to choose from.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: aspenku,
    source_code_link: "https://aspenku.com/",
  },
  {
    name: "Delivery services in Aspenku ",
    description:
      "The project may offer a range of delivery options, including same-day, next-day, or express delivery services. It may also offer tracking and monitoring tools to help customers keep track of their packages in real-time. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: courier,
    source_code_link: "https://courier.aspenku.com/",
  },
  {
    name: "Content Management System ",
    description:
      "The project is a Content Management System (CMS) that is used internally within an organization to input and manage master data. Master data refers to the essential data that is used to run the business, such as customer information, product information, and financial data.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "boostrap",
        color: "green-text-gradient",
      },
    ],
    image: cms,
    source_code_link: "https://github.com/",
  },
  {
    name: "Company Profile ",
    description:
      " project company profile developed with Next.js and Tailwind CSS showcases company's services, team, and achievements through a modern and responsive website. The combination of Next.js and Tailwind CSS provides  with performance optimization, responsive design, and a maintainable codebase, resulting in an exceptional user experience for  visitors.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: rafas,
    source_code_link: "https://www.rafas.id/",
  },
];

export { services, technologies, experiences, projects };
