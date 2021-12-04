const positions = [
  {
    company: 'Google',
    position: 'Software Engineer',
    link: 'https://google.com',
    daterange: 'July 2020 - Present',
    points: [
      'Working on internal version of gRPC (grpc.io), an open-source RPC framework developed by Google.',
      'Driving large-scale performance improvements in C++ implementation through profiling, benchmarking, and implementing solutions to identified issues.',
      'Collaborating with internal ML/storage/networking customers on bugs, feature requests, etc.',
    ],
  },
  {
    company: 'HackDavis',
    position: 'Co-President / Director of Sponsorship',
    link: 'https://hackdavis.io',
    daterange: 'February 2019 - May 2020',
    points: [
      'Led a team of 24 to organize a 600+ person event.',
      'Worked with companies like OSIsoft and Google Cloud for funding.',
      'Raised over $50k for event.',
    ],
  },
  {
    company: 'Meta (previously Facebook)',
    position: 'Software Engineering Intern',
    link: 'https:/facebook.com',
    daterange: 'June 2019 - September 2019',
    points: [
      'Developed virtual reality system that allows users to apply stickers onto a surface in the virtual space.',
      'Determined collision point between sticker and surface, rotation/scale of sticker, and angle of sticker to surface; passed to HLSL shader that blits sticker texture onto surface’s render texture in real-time.',
      'Added networked syncing across clients – when user applies sticker, all clients see sticker being applied in real-time.',
      'Code written mainly in C#, HLSL for shader work, used Unity and tested with Oculus Rift/Quest (performance profiling).',
    ],
  },
  {
    company: 'Microsoft',
    position: 'Software Engineering Intern',
    link: 'https://microsoft.com',
    daterange: 'April 2019 - June 2019',
    points: [
      'Used open-source edge/service proxy Envoy to implement L4 and L7 filtering in a common unified engine.',
      'Written in C++, added two new RBAC filters to perform specific HTTP/HTTPS and network (IP) filtering based on team’s needs, used TLS inspector filter to resolve SNI headers for HTTPS traffic, added ability to filter by FQDN tags.',
      'Wrote Python script to auto-generate rules to test new system, used Fortio to set up mock clients and server for performance measuring, presented new system and its benefits to leadership.',
    ],
  },
  {
    company: 'HackDavis',
    position: 'Director of External Affairs',
    link: 'https://hackdavis.io',
    daterange: 'April 2019 - June 2019',
    points: [
      'Found non-profits like Beyond12 and Habitat for Humanity to donate to after hackathon.',
      'Networked with companies for funding and clubs for volunteers.',
      'Reached out to students through fairs and clubs.',
      'Organized transportation for other campuses.',
    ],
  },
  {
    company: 'Microsoft',
    position: 'Explore Intern',
    link: 'https://microsoft.com',
    daterange: 'June 2018 - September 2018',
    points: [
      'Worked as an Explore intern at Microsoft in the Data and Intelligence in Gaming team within Xbox division, further developing skills in Program Management, Data Science, and Data Engineering.',
      'Focused on A/B testing in Xbox Assist app. Two experiments to (1) increase CTR (+10%) on specific pages, and (2) reduce no-result searches (-10%).',
      'Led efforts in first experiment, creating spec/WBS and assigning tasks; delivered content recommendations to editorial team after experiments/data analysis was completed; added desired tracking metrics to scorecard.',
      'Made code changes in Assist app using Angular to add ability to loop different text strings through search box.',
    ],
  },
  {
    company: 'Google',
    position: 'CodeU Participant',
    link: 'https://google.com',
    daterange: 'May 2018 - August 2018',
    points: [
      'Invite-only program for students with high potential to work at Google in the future.',
      'Built on Java chat app using Maven framework and run with Google App Engine.',
      'Worked with two other students and current Googler as project advisor.',
      'Added sentiment analysis on messages and translation abilities to app using GCP NLP API and GCP Translation API.',
    ],
  },
  {
    company: 'UC Davis, Department of Computer Science',
    position: 'Undergraduate Research Assistant',
    link: 'https://cs.ucdavis.edu',
    daterange: 'October 2016 - September 2017',
    points: [
      'Worked on Ruby on Rails educational website that provides customized computer science exercises to students. Implemented methods that automatically generate fill-in-the-blank and reading comprehension questions from code snippet.',
      'Used Python tokenizer to tokenize code snippets, remove random token, and re-enter into PostgreSQL database, resulting in more efficient database storage.',
      'Wrote Ruby task script to scrape text files and create code snippets from data.',
      'Under supervision of PhD student Martin Velez and Professor Zhendong Su.',
    ],
  },
  {
    company: 'TileWarp',
    position: 'Software Developer',
    link: 'https://tilewarp.weebly.com',
    daterange: 'January 2015 - September 2016',
    points: [
      'Formed startup with two classmates, marketer and designer, to build Android application.',
      'Organized meeting times, coordinated different aspects of app, assisted with marketing/design, met with users to talk about app and receive feedback.',
      'Learned leadership, communication, and creativity skills.',
      'Over 30 downloads and 100 likes on Facebook page. Featured in school newspaper.',
    ],
  },
];

export default positions;
