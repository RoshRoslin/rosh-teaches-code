const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://www.roshroslin.com',
  title: 'RR',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rosh Roslin',
  role: 'I will teach you code',
  description:
    'This is a tutorial series to help developers learn about different coding concepts in a straightforward, easy to understand manner. As a self-taught developer, many coding tutorials online offered solutions without going through the basics to understand how to solve algorithm challenges and other coding concepts ',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/roshroslin/',
    github: 'https://github.com/RoshRoslin',
    instagram: 'https://www.instagram.com/RoshRoslin',
    youtube: 'https://www.youtube.com/channel/UCrl_1ztDBHjOIdXnPXoFbJw',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Javascript', 'Algorithms', 'Data Structures'],
    link: 'https://youtu.be/CbtYlsyVL1Y',
    livePreview: 'https://youtu.be/CbtYlsyVL1Y',
    img: 'https://img.youtube.com/vi/CbtYlsyVL1Y/0.jpg',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Javascript', 'Algorithms', 'Data Structures'],
    link: 'https://youtu.be/CbtYlsyVL1Y',
    livePreview: 'https://youtu.be/CbtYlsyVL1Y',
    img: 'https://img.youtube.com/vi/CbtYlsyVL1Y/0.jpg',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Javascript', 'Algorithms', 'Data Structures'],
    link: 'https://youtu.be/CbtYlsyVL1Y',
    livePreview: 'https://youtu.be/CbtYlsyVL1Y',
    img: 'https://img.youtube.com/vi/CbtYlsyVL1Y/0.jpg',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',

  'React',
  'SASS',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'roshroslin@gmail.com',
}

export { header, about, projects, skills, contact }
