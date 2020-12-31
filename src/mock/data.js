import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'E-Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Marylou Arsolon',
  subtitle: 'Human-Computer Interaction',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi There! Marylou Arsolon a student of Iloilo Science and technology University, (ISATU)',
  paragraphTwo: 'I am not a intelligent student but I know how to manage and handle serious and difficult situations. I like to stay simple and lowkey  and enjoy every moment of my life.',
  paragraphThree: ' I wish to be more strong physically in future. I do not lack in confidence but I would like to make it as strong, I would like to go for positive experiences in my life because experience is the best teacher as a human being .',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Syllable.jpg',
    title: 'Syllabus',
    info: 'To provide a nurturing environment where academic freedom is guaranteed and respected for the optimum development of human potential ',
    info2: '',
    url: '/modules/Syllable/Syllable.pdf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Foundation_Interaction.jpg',
    title: 'Foundation of Human Interaction',
    info: 'This module introduces the fundamental components of an interactive system like the human user, the computer system itself, and the nature of the interactive process.',
    info2: '',
    url: '/modules/Module1/Module1.pdf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Prototypes.jpg',
    title: 'Module 2',
    info: 'This module introduces the common styles use in Human Computer Interaction related to design and of the prototypes for the technology that involves Human-Computer Interaction (HCI).',
    info2: '',
    url: '/modules/Module2/Module2.pdf',
    repo: '/modules/Module2/Top_10_Prototypes.docx', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Computer_Interaction1.jpg',
    title: 'Human - Computer Interaction 1',
    info: 'This module introduces the related fields that involves Human Computer Interaction (HCI). Discussed current research in the field of HCI, explained other fields that are related to HCI where it has been drawn',
    info2: '',
    url: '/modules/Module3/Module3.pdf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Paradigm.jpg',
    title: 'Paradigms',
    info: 'With the rapid change of modern computing technologies, it is essential to study the history of interactive system design that promotes paradigms for maximum usability',
    info2: '',
    url: '/modules/Module4/Module4.pdf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Conceptualizing.jpg',
    title: 'Conceptualizing Interaction',
    info: 'Explain what is meant by the problem space. Explain how to conceptualize interaction, describe what a conceptual model is and how to begin to formulate one',
    info2: '',
    url: '/modules/Module5/UNDERSTANDING-and-CONCEPTUALIZING-INTERACTION.pdf',
    repo: '/modules/Module5/Paper_book.pdf', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Design_Rules.jpg',
    title: 'Module 6 Design Rules',
    info: 'We require design rules, which are rules a designer can follow in order to icnrease the usability of the eventual software product.',
    info2: '',
    url: '/modules/Module6/Design_Rules.pdf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Implimentation.jpg',
    title: 'Implementation in HCI',
    info: 'Programming tools provide levels of services for programmers, windowing systems as core support for separate and simultaneous user-system threads',
    info2: '',
    url: '/modules/Module7/Implementation_Support.pdf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Implimentation_Support.jpg',
    title: 'Implementation Support 8',
    info: 'Programming tools is a levels of services for programmers, windowing system is a core support for separate and simultaneous user-system activity, programming the application and control of dialogue',
    info2: '',
    url: 'https://www.slideshare.net/alanjohndix/hci-3e-ch-8-implementation-support?fbclid=IwAR20rb6WUBt49_YhYQ9Pj5e_hByW-6xeEZkdb__ww33ROF9fWRukP5yfqYI',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Techniques.jpg',
    title: 'Evaluation Techniques',
    info: 'Tests usability and functionality of system, occurs in laboratory, field and/or in collaboration with users, evaluates both design and implementation, should be considered at all stages in the design life cycle',
    info2: '',
    url: 'https://www.slideshare.net/alanjohndix/hci-3e-ch-9-evaluation-techniques?fbclid=IwAR0qsj4DnhFIai9pQTqwQsd4p1Wox4RLG-l8KEMHUGpH42ePf492QmrzfCg',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Universal_Design.jpg',
    title: 'Universal Design',
    info: 'equitable use, flexibility use, simple and intuitve to use, perceptible information, tolerance for error, low physical effor, size and space for approach and use',
    info2: '',
    url: 'https://www.slideshare.net/alanjohndix/hci-3e-ch-10-universal-design?fbclid=IwAR3c0wDL24ryMp-z5fn8ldGdMFTkBdlinQBeKt0Y4sChoLfy3jykR63GTVI',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Happy New Year :)',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_nolosra/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/marylou.arsolon.5',
    },
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/marylou123/Portfolio',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
