const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://www.roshroslin.com',
  title: 'RR',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rosh Roslin',
  role: 'I will teach you code',
  description: '',
  resume: '',
  social: {
    linkedin: 'https://linkedin.com/RoshRoslin',
    github: 'https://github.com/RoshRoslin',
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
