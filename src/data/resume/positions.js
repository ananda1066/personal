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
];

export default positions;
