/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Tafsir Ahamed",
  logo_name: "Tafsir Ahamed",
  subTitle:
    "A passionate individual who loves to learn new technologies and implement them in real world solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1aNQ-n7dSB8tykQ6bSfgIkyvZY1GVV1aB/view?usp=sharing",
  //portfolio_repository: "https://github.com/Tafsir1729/masterPortfolio",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tafsir-ahamed/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/Tafsir1729",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/tafsir.ahmed.9822",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Skype",
    link: "https://join.skype.com/invite/UUAD79CjS5gz",
    fontAwesomeIcon: "fa-skype", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#00b0ec", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Programming Languages",
      skills: [
        "⚡ Solved 500+ problems in URI and UVA online judges.",
        "⚡ Led a team, ‘DIU_Debuggers’ in ACM ICPC Dhaka Regional 2017 Online Preliminary Round Hosted by University of Asia Pacific.",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "logos-c-sharp",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos-c",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
        },
      ],
    },
    {
      title: "Web Programming",
      skills: [""],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs-icon",
        },
      ],
    },
    {
      title: "Version Control Systems",
      skills: [""],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "logos-git",
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos-github-icon",
        },
      ],
    },

    {
      title: "Microsoft Office Tools",
      skills: [""],
      softwareSkills: [
        {
          skillName: "Word",
          fontAwesomeClassname: "vscode-icons:file-type-word",
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
        },

        {
          skillName: "PowerPoint",
          fontAwesomeClassname: "vscode-icons:file-type-powerpoint",
        },

        {
          skillName: "Outlook",
          fontAwesomeClassname: "vscode-icons:file-type-outlook",
        },
      ],
    },

    {
      title: "Operating Systems",
      skills: [""],
      softwareSkills: [
        {
          skillName: "Windows",
          fontAwesomeClassname: "logos-microsoft-windows",
        },
        {
          skillName: "Linux (Ubuntu)",
          fontAwesomeClassname: "logos-ubuntu",
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "B.Sc.  in Computer Science & Engineering",
      subtitle: "Daffodil International University",
      //logo_path: "diu_logo.png",
      //alt_name: "IIITDM Kurnool",
      duration: "Passing Year: 2020",
      result: "CGPA: Appeared",
      //descriptions: "CGPA: Appeared",
      //website_link: "http://iiitk.ac.in",
    },

    {
      title: "Higher Secondary Certificate (HSC) Examination",
      subtitle: "Bangladesh Navy College Dhaka",
      //logo_path: "diu_logo.png",
      //alt_name: "IIITDM Kurnool",
      duration: "Passing Year: 2016",
      result: "GPA: 5.00 out of 5.00",
      //descriptions: "CGPA: Appeared",
      //website_link: "http://iiitk.ac.in",
    },

    {
      title: "Secondary School Certificate (SSC) Examination",
      subtitle: "Mirpur Siddhanta High School",
      //logo_path: "diu_logo.png",
      //alt_name: "IIITDM Kurnool",
      duration: "Passing Year: 2014",
      result: "GPA: 5.00 out of 5.00",
      //descriptions: "CGPA: Appeared",
      //website_link: "http://iiitk.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/TCLR4AP8JE9A",
      //alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/4XYMQWFLTMD5",
      //alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Python for Everybody",
      subtitle: "University of Michigan",
      logo_path: "michigan_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/7NDVZR2MNF2Y",
      //alt_name: "deeplearning.ai",
      color_code: "#00274b",
    },
    {
      title: "Data Science",
      subtitle: "Johns Hopkins University",
      logo_path: "johns_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/S88UCE95BM2V",
      //alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Applied Data Science with Python",
      subtitle: "University of Michigan",
      logo_path: "michigan_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/ZZDNJ97U5FHN",
      //alt_name: "deeplearning.ai",
      color_code: "#00274b",
    },
    {
      title: "Data Engineering, Big Data, and Machine Learning on GCP",
      subtitle: "Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/KURXXWE66TML",
      //alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/L3UPLRMA68SL",
      //alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "Python 3 Programming",
      subtitle: "University of Michigan",
      logo_path: "michigan_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/N62ELW43M3J2",
      //alt_name: "Microsoft",
      color_code: "#00274b",
    },
    {
      title: "Natural Language Processing",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/FSHRTLVYGHBU",
      //alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "Google IT Automation with Python",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/K8LYG8LPUCCZ",
      //alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google IT Support",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/ENY9WWMTVMFV",
      //alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "An Introduction to Programming the Internet of Things (IOT)",
      subtitle: "University of California, Irvine",
      logo_path: "uci_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/AV3AZTF66PFE",
      //alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "English for Career Development",
      subtitle: "University of Pennsylvania",
      logo_path: "penn_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/RBGFV6UTJVYF",
      //alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Academic English: Writing",
      subtitle: "University of California, Irvine",
      logo_path: "uci_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/254QSKNPE829",
      //alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "The Science of Well-Being",
      subtitle: "Yale University",
      logo_path: "yale_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YZHXJCZR7PRD",
      //alt_name: "Coursera",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  //description:"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship",
      experiences: [
        {
          title: "Software Engineer (Intern)",
          company: "ImpleVista",
          company_url: "http://implevista.com/",
          logo_path: "imple_logo.png",
          duration: "January 2021 - PRESENT",
          location: "Dhaka, Bangladesh",
          //description:"I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  //description:"My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    //profile_image_path: "animated_ashutosh.png",
    //description:"I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },

  addressSection: {
    title: "Address",
    subtitle: "3 No Golartek, Mirpur-1, Dhaka-1216, Bangladesh",
    avatar_image_path: "address_image.svg",
    //location_map_link: "https://www.google.com/maps/place/Jahurabad,+Dhaka/@23.7951605,90.3404894,18z/data=!3m1!4b1!4m5!3m4!1s0x3755c0f6d15d5bff:0x9638fd295cea841c!8m2!3d23.7952589!4d90.3415987",
  },
  emailSection: {
    title: "Email",
    subtitle: "tafsir9143@gmail.com",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+8801795315139",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
