import {
  mobile,
  backend,
  lifeguard,
  convoy,
  fortress,
  creator,
  中國太平,
  ppp,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  fairdeal,
  PostgreSQL,
  p5,
  python,
  insomnia,
  knex,
  stripe,
  ionic,
  vite,
  NestJS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "p5.js",
  //   icon: p5,
  // },
  {
    name: "python",
    icon: python,
  },
  // {
  //   name: "insomnia",
  //   icon: insomnia,
  // },
  {
    name: "knex",
    icon: knex,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "stripe",
    icon: stripe,
  },
  {
    name: "ionic",
    icon: ionic,
  },
  {
    name: "NestJS",
    icon: NestJS,
  },
];

const experiences = [
  {
    title: "Lifeguard",
    company_name: "POOL-AID (POOL MANAGEMENT) CO. LIMITED",
    icon: lifeguard,
    iconBg: "#ffffff",
    date: "2016 - 2023",
    points: [
      "Protected public safety.",
      "Using the knowledge of the product to satisfy the customer.",
      "Performed security-related duties within the store to provide customers with a luxurious shopping experience.",
    ],
  },
  {
    title: "Part time promoter",
    company_name: "Fortress",
    icon: fortress,
    iconBg: "#f26f22",
    date: "Jan, 2019 – Apr, 2019",
    points: [
      "Kept the workplace clean and tidy.",
      "Using the knowledge of the product to satisfy the customer.",
      "Performed security-related duties within the store to provide customers with a luxurious shopping experience.",
    ],
  },
  {
    title: "個人保險代理",
    company_name: "中國太平人壽保險",
    icon: 中國太平,
    iconBg: "#ffffff",
    date: "Sept 23, 2019 – Oct 24, 2020",
    points: [
      "Developed and maintained a strong client base by delivering personalized insurance solutions tailored to individual needs and financial goals.",
      "Conducted comprehensive policy reviews, identifying coverage gaps and recommending appropriate insurance products.",
    ],
  },
  {
    title: "Senior Consultant",
    company_name: "Convoy global holdings limited",
    icon: convoy,
    iconBg: "#ffffff",
    date: "Nov 1, 2020 – May 1, 2023",
    points: [
      "Utilized effective communication and negotiation skills to build trust and with clients.",
      "Utilizing data-driven approaches to identify market trends and competitive landscapes, enabling clients to make informed strategic decisions.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Very Good!",
    name: "Beeno Tung",
    designation: "Instructor",
    company: "Tecky Academy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9FH1STKqCmjxtbcOPR-2IEGk7KsuOSynqqAS2spz-1yRZmhsbQ1Gcpy63xzfzLIqZOI&usqp=CAU",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Pretty Pitied Pitch",
    description:
      "A 3D augmented reality audio game. This project leverages a range of technologies, including JavaScript, HTML/CSS, Node.js, p5.js, TypeScript, and Three.js, to deliver an unparalleled gaming experience. The game challenges players to topple as many wine glasses as possible within a time limit.",
    tags: [
      {
        name: "p5.js",
      },
      {
        name: "three.js",
      },
      {
        name: "bootstrap",
      },
      {
        name: "html",
      },
      {
        name: "css",
      },
      {
        name: "WebXR",
      },
      {
        name: "blender",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "TypeScript",
      },
      {
        name: "ec2",
      },
      {
        name: "S3",
      },
      {
        name: "knex.js",
      },
      {
        name: "Route 53",
      },
      {
        name: "NGINX",
      },
      {
        name: "Ubuntu",
      },
      {
        name: "node.js",
      },
      {
        name: "express.js",
      },
      {
        name: "cloudfront",
      },
    ],
    image: ppp,
    source_code_link: "https://github.com/2288marcus/BAD_project.git",
  },
  {
    name: "Fair Deal",
    description:
      "This app, built with React, Ionic, and Node.js, aims to provide a platform for users to create services and communicate seamlessly. Users can effortlessly connect demanders and suppliers, engage in real-time chat, and establish contracts. With features like TypeScript, Nest.js, and PostgreSQL, creating, collaborating, and contracting services has become easier than ever.",
    tags: [
      {
        name: "react",
      },
      {
        name: "node-forge",
      },
      {
        name: "ionic",
      },
      {
        name: "html",
      },
      {
        name: "stripe",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "TypeScript",
      },
      {
        name: "knex.js",
      },
      {
        name: "vite",
      },
      {
        name: "node.js",
      },
      {
        name: "nest.js",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: fairdeal,
    source_code_link: "https://github.com/2288marcus/final-project.git",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
