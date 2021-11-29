const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Data Science / ML'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'PostgreSQL/SQL',
    competency: 1,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Javascript',
    competency: 2,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'AngularJS',
    competency: 1,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'HTML + CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages', 'Data Science / ML'],
  },
  {
    title: 'Ruby on Rails',
    competency: 2,
    category: ['Frameworks'],
  },
  {
    title: 'Unity',
    competency: 3,
    category: ['Frameworks'],
  },
  {
    title: 'Numpy',
    competency: 1,
    category: ['Data Science / ML'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['Data Science / ML'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Science / ML'],
  },
  {
    title: 'Scikit-Learn',
    competency: 1,
    category: ['Data Science / ML'],
  },
  {
    title: 'gRPC',
    competency: 4,
    category: ['Technologies'],
  },
  {
    title: 'Envoy',
    competency: 2,
    category: ['Technologies'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 2,
    category: ['Technologies'],
  },
  {
    title: 'Android',
    competency: 3,
    category: ['Frameworks'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
