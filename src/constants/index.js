import project1 from "../Images/projects/project-1.jpg";
import project2 from "../Images/projects/project-2.jpg";
import project3 from "../Images/projects/project-3.jpg";
import project4 from "../Images/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate and driven computer science student actively seeking exciting opportunities to grow and contribute. With a strong foundation in data analysis, software development, project management, etc, I bring a versatile skill set and a commitment to delivering impactful solutions and results. The career opportunities I am interested in are data engineering or analysis, project management, software foundations, and other related fields.`;


export const EXPERIENCES = [
  {
    year: "May 2025 - August 2025",
    role: "Digital Technology - Computer Vision Intern",
    company: "GE Vernova",
    description: `The role involved optimizing computer vision pipelines and solutions to enhance automation and researching synthetic image generation to improve computer vision solution accuracy. I also help lead an AI initiative to inspire individuals to explore AI topics.`,
    skills: ["AWS", "Python", "DAX", "Numpy", "Pandas", "OpenCV"],
  },
  {
    year: "January 2024 - May 2025",
    role: "Business Intelligence Intern",
    company: "AFL Telecommunications",
    description: `The role involved using SQL Server Management Studio to extract, transform, and load data from multiple sources into a single database. It also included developing dashboards in Power BI for data analysis and trend identification, identifying database discrepancies, and introducing potential projects for better efficiency.`,
    skills: ["SQL", "Power BI", "SSMS", "DAX", "Microsoft Office", "Tabular Editor"],
  },
  {
    year: "September 2022 - May 2023",
    role: "Sales Representative",
    company: "Clemson Annual Giving Office",
    description: `The role involved engaging with Clemson University alumni to discuss the annual giving office and fostering alumni participation in university donations. We help inform alumni about the current Clemson situation and encourage alumni to give back to their communities`,
    skills: ["Communication", "Interpersonal", "Team Environment", "Collaboration"],
  },
];

export const PROJECTS = [
  {
    title: "License Plate Detector",
    description:
      "Developed and implemented a YOLOv11 computer vision model for license plate object detection with 96% accuracy. Trained model with over 5000+ images and create test scripts using OpenCV and Python for real-time inference. Integrated an Optical Character Recognition module to extract license plate characters from detected regions...",
    technologies: ["Google Colab", "Python", "Ultralytics", "OpenCV", "EasyOCR"],
    year: "May 2025",
    link: "https://github.com/DannyHo0127/LicenseDetector"
  },
  {
    title: "TigerChow-API",
    description:
      "Designed and Deployed RESTful APIs for Account, Notifi cation, and Order services using AWS and Postman. Applied modern software design principles, including the Decorator pattern, to amplify code reusability.",
    technologies: ["AWS", "Python", "Postman", "YAML", "JSON"],
    year: "April 2025",
    link: "https://github.com/DannyHo0127/Tigerchow-API"
  },
  {
    title: "Nail Website",
    description:
      "A simple Nail website that promotes a local business. Featuring key pages such as home, about, services, and locations page to promote business.",
    technologies: ["HTML", "CSS", "Javascript"],
    year: "September 2024",
    link: "https://github.com/DannyHo0127/Polish-Nail-Bar"
  },
  {
    title: "Cipher Program",
    description:
      "Implemented an encryption and decryption system for passwords using a provided key in C++. Created a solution that could take an encrypted word and decipher all possible solutions for that encrypted message. Utilized Linux's built-in dictionary, linked list (Queue), parent classes, functions, files, and libraries to ensure efficient and secure handling of data.",
    technologies: ["C++", "Linux"],
    year: "March 2023",
    link: "https://github.com/DannyHo0127/Cipher-Project"
  },
  {
    title: "Pizzaria Order System",
    description:
      "Implemented a program in java that will take in pizza orders and accumulate total cost of order. At the end, it will generate the customer's receipt in a txt file",
    technologies: ["Java", "Linux"],
    year: "November 2022",
    link: "https://github.com/DannyHo0127/Pizzaria-Receipt-Project"
  },
];


