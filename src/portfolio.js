const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nitesh Karki | Portfolio",
  description:
    "An AWS certified DevOps Engineer with 5+ years of experience in multi-national IT enterprise environments. Managed large scale servers, firewalls, and networking, extremely proficient with cloud technology like AWS, VMware, Azure & Rackspace, and have a deep passion for enterprise-wide system & security management.",
  og: {
    title: "Nitesh's Portfolio",
    type: "website",
    url: "http://niteshk.com.np/",
  },
};

//Home Page
const greeting = {
  title: "Namaste!",
  sub: "Nitesh Karki",
  logo_name: "Nitesh Karki",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/nitesh-tekkon",
    },
    {
      siteName: "AWS",
      iconifyClassname: "logos:aws",
      style: {
        color: "white",
      },
      profileLink: "https://www.youracclaim.com/badges/6e1ca2b5-f814-4bb6-b949-5be38efaf988/linked_i",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/nitesh-karki-devops/",
    },
    {
      siteName: "HashNode",
      iconifyClassname: "simple-icons:hashnode",
      style: {
        color: "#2962ff",
      },
      profileLink: "",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "DevOps Engineer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Deploy, manage, and operate scalable, highly available, and fault-tolerant systems on AWS/Microsoft Azure/Google Cloud/Digitalocean/Rackspace.",
        "⚡ Experience with standing up a continuous delivery pipeline using tools like Jenkins, GitLabCI, Drone and Docker.",
        "⚡ Estimate AWS usage costs and identify operational cost control mechanisms with advanced cost optimization techniques",
        "⚡ Experience and knowledge of scripting with Bash & Python and IT Automation with Ansible.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos-aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Google",
          fontAwesomeClassname: "logos-google",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "serverless",
          fontAwesomeClassname: "logos-serverless",
          style: {
            backgroundColor: "transparent",
          },
        }
      ],
    },
    {
      title: "Cyber Security",
      fileName: "DesignImg",
      skills: [
        "⚡ Penetration testing | SQL injection | XSS",
        "⚡ NagiosXI | zabbix | mon | ganglia -- monitoring and alerting system (both performance and alerting).",
        "⚡ Familiarity with operations of Python, Node.js, & php applications.",
        "⚡ Monitoring and alerting system setup for large scale servers.",
      ],
      softwareSkills: [
        {
          skillName: "Security",
          fontAwesomeClassname: "mdi:server-security",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Database",
          fontAwesomeClassname: "mdi:database-check-outline",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Servers",
          fontAwesomeClassname: "ant-design:cloud-server-outlined",
          style: {
            color: "#2fa3f7",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node & Python Flask",
        "⚡ Having experience in Domain & Hosting using AWS, GCP, Heroku & cPanel",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/nitesh-tekkon/TEATH",
      linkcolor: "white",
    },

    // {
    //   title: "Voice Gender Detection",
    //   img_path: "voice.gif",
    //   description:
    //     "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "tensorflow",
    //       color: "#4257f5",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "NeuralViz",
    //   img_path: "neural.gif",
    //   description:
    //     "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "numpy",
    //       color: "#8700b0",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://neuralviz.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/neuralviz",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Semantic Search APP",
    //   img_path: "project-03.png",
    //   description:
    //     "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Youtube Thumbnail Generator & AutoUploader",
    //   img_path: "project-02.png",
    //   description:
    //     "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
    //   tags: [
    //     {
    //       lang: "internal project",
    //       color: "red",
    //     },
    //     {
    //       lang: "youtube v3 api",
    //       color: "red",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },

    // {
    //   title: "Newsearcher",
    //   img_path: "news.gif",
    //   description:
    //     "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "newspaper3k",
    //       color: "#303030",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "nltk",
    //       color: "#051c61",
    //     },
    //   ],
    //   link: "https://newsearcher.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/Newsearcher",
    //   linkcolor: "white",
    // },
    // {
    //   title: "ActiWeight",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "DevOps Engineer",
        subtitle: "PortPro US",
        date: "Feb 2021 - present",
        content: [
          "Scalable Microservices architecture deployment and configuration Continuous Integration and Deployment for FrondEnd and Backend Stacks with tools like jenkins and GitlabCI.",
          "Created Custom solution to automate deployment workflow using SLACK.",
          "Built secure and modern cloud infrastructure Architecture diagrams and implementation with CloudFormations following modern cloud guidelines.",
          "Build a solution to display logs from Cloudwatch using ElasticSearch and Kinesis Stream.",
          "Serverless Architecture using Lambda, Appsync, GraphQL and Cognito.",
          "Containerized deployments with advanced tools like EKS and ECS.",
          "Monitoring and alerting system setup for large scale servers.",     
        ],
      },
      {
        title: "DevOps Engineer",
        subtitle: "Tekkon Technologies",
        date: "Nov 2019 - Present",
        content: [
          "Scalable Microservices architecture deployment and configuration Continuous Integration and Deployment for FrondEnd and Backend Stacks with tools like jenkins and GitlabCI.",
          "Customized and Integrated OpenSource tool that replaces functionalities of GSuite.",
          "Built secure and modern cloud infrastructure Architecture diagrams and implementation with CloudFormations following modern cloud guidelines.",
          "Build a solution to display logs from Cloudwatch using ElasticSearch and Kinesis Stream.",
          "Serverless Architecture using Lambda, Appsync, GraphQL and Cognito.",
          "Containerized deployments with advanced tools like EKS and ECS.",
          "Monitoring and alerting system setup for large scale servers.",
        ],
      },
      {
        title: "SysOps Engineer",
        subtitle: "Genese SOlutions",
        date: "Feb 2017 - October 2019",
        content: [
          "Lead a support team of 20 System Engineers.",
          "Deployment application and solutions for Top banks in Nepal.",
          "Disaster Recovery team lead.",
          "Responsible for Managing All Nepal and UK clients for WebApp and Email hosting on Linux Server (CentOS & Ubuntu) ( 500+ Servers).",
          "Hired as a full-time systems administrator following an initial consulting role to manage and maintain a 50+ mixed server environment (Windows/Unix/Linux), ensuring 99.9% or better up time. Evaluate, monitor and enhance IT infrastructure with an emphasis on availability, reliability, scalability, security, data confidentiality and system integrity..",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Computer",
          subtitle: "Nepal Engineering College, Bhaktapur",
          date: "2013 - 2018",
          content: ["CGPA: 3.2/4"],
        },
        {
          title: "Higher Secondary Certificate [HSEB]",
          subtitle: "Sagarmatha College, Kathmandu",
          date: "2011 - 2013",
          content: ["Precentage: 75%"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "Top rated DevOps Engineer in Upwork from Nepal",
            "100% Job Success in Upwork",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Senior Cloud Engineer/IT Manager",
            "5⭐ on Security & Deployment at AWS ",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Application Deployment",
          subtitle: "app.portpro.io",
          content: [
            "Deployed the application with high scalable and secure architecture supporting thousands of users worldwide",
          ],
        },
        {
          title: "Application Deployment",
          subtitle: "growimpact.com.au",
          content: [
            "Deployed the application with high scalable and secure architecture supporting thousands of users worldwide",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "AWS Certified DevOps Engineer",
      subtitle: "AWS DevOps",
      logo_path: "aws.png",
      certificate_link:
        "https://www.youracclaim.com/badges/6e1ca2b5-f814-4bb6-b949-5be38efaf988/linked_i",
      alt_name: "AWS",
      color_code: "#000000",
    },
    {
      title: "Google Adwords",
      subtitle: "Google",
      logo_path: "google.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/course/7/certificate",
      alt_name: "google",
      color_code: "#000000",
    },
    {
      title: "AWS Professional EC2 Systems Manager",
      subtitle: "AWS",
      logo_path: "aws-logo.png",
      certificate_link: "",
      alt_name: "aws",
      color_code: "#000000",
    },
    {
      title: "Nagios XI",
      subtitle: "Nagios",
      logo_path: "nagios.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "VMWARE",
      subtitle: "VMWARE",
      logo_path: "vmware.png",
      certificate_link:
        "",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Question Generation using Transformers",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    // {
    //   title: "Data Visualization",
    //   subtitle: "University of Michigan",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "University of Michigan",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Scientist Career Track",
    //   subtitle: "DataCamp",
    //   logo_path: "datacamp-01.png",
    //   certificate_link:
    //     "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
    //   alt_name: "DataCamp",
    //   color_code: "#000000",
    // },
    // {
    //   title: "PowerBI Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with AWS, Google Cloud, Azure, cPanel, Servers, Databases and Cyber Security.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kathmandu, Nepal",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+977 9843209020",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nitesh-tekkon/",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "white", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nitesh-karki-devops/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC2QlC-s6Ezg5WNnKoZwwmpw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:nitacekarki@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nit_aace/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
