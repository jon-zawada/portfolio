const data = {
  1: {
    name: 'Relax.ly',
    description: 'A lodging or vacation reservation service calendar component',
    tech: ['Javascript', 'React.js', 'Node.js', 'Express', 'MySql', 'AWS', 'Docker', 'Moment.js'],
    bullets: [
      'Designed realtime calendar with React and Javascript to optimize client input through conditional rendering.',
      'Architected SQL schema to maintain data normalization for individual reservation locations.',
      'Created RESTful API routes with Express to ensure simple yet effective communication between front and back end.'
    ],
    gif: '/images/relaxly.gif',
    icon: '/images/relaxly.png',
    id: 1,
    github: 'https://github.com/jon-zawada/reservation-services',
    youtube: 'https://www.youtube.com/watch?v=NkV8bl5Z5pU&feature=youtu.be&ab_channel=JonathanZawada'
  },
  2: {
    name: 'Nimbus',
    description: 'A music streaming service sidebar component',
    tech: ['Javascript', 'React.js', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Nginx', 'New Relic', 'Loader.io'],
    bullets: [
      `Distributed workload on Node servers by implementing an Nginx round-robin load balancer and improved throughput
      from ~550rps to ~1000rps and average request latency to 29ms.`,
      'Implemented an Nginx cache to improve query speeds by 90% (~300ms to ~29ms).',
      'Utilized New Relic and Loader.io to diagnose and determine server and database bottlenecks.'
    ],
    gif: '/images/nimbus.gif',
    icon: '/images/headphones.svg',
    id: 2,
    github: 'https://github.com/jon-zawada/sidebar-service',
    youtube: ''
  },
  3: {
    name: 'Adventure Tide',
    description: 'A real time ocean tide tracking application',
    tech: ['Javascript', 'React.js', 'React Hooks', 'React Charts 2', 'Moment.js', 'Node.js', 'Express', 'MySQL', 'AWS', 'Unirest'],
    bullets: [
      'Designed, developed, and deployed, in 2 days, a web application that allows users to monitor optimal ocean conditions and log their personalized experiences.',
      'Implemented smooth communication between multiple web APIs using Unirest to obtain realtime tide level data.',
      'Displayed tide level data per input location for an interactive and clean user experience through the use of React-Charts-2.'
    ],
    gif: '/images/tides.gif',
    icon: '/images/wave.png',
    id: 3,
    github: 'https://github.com/jon-zawada/Adventure-Tide',
    youtube: 'https://www.youtube.com/watch?v=ImaL2I_i88k&feature=youtu.be&ab_channel=JonathanZawada'
  },
  projects: [
    {
      name: 'Relax.ly',
      description: '',
      tech: ['Javascript', 'React.js', 'Node.js', 'Express', 'MySql', 'AWS', 'Docker', 'Moment.js'],
      bullets: [
        'Designed realtime calendar with React and Javascript to optimize client input through conditional rendering.',
        'Architected SQL schema to maintain data normalization for individual reservation locations.',
        'Created RESTful API routes with Express to ensure simple yet effective communication between front and back end.'
      ],
      gif: '/images/relaxly.gif',
      icon: '/images/relaxly.png',
      id: 1,
      github: 'https://github.com/jon-zawada/reservation-services',
      youtube: 'https://www.youtube.com/watch?v=NkV8bl5Z5pU&feature=youtu.be&ab_channel=JonathanZawada'
    },
    {
      name: 'Nimbus',
      description: '',
      tech: ['Javascript', 'React.js', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Nginx', 'New Relic', 'Loader.io'],
      bullets: [
        `Distributed workload on Node servers by implementing an Nginx round-robin load balancer and improved throughput
        from ~550rps to ~1000rps and average request latency to 29ms.`,
        'Implemented an Nginx cache to improve query speeds by 90% (~300ms to ~29ms).',
        'Utilized New Relic and Loader.io to diagnose and determine server and database bottlenecks.'
      ],
      gif: '/images/nimbus.gif',
      icon: '/images/headphones.svg',
      id: 2,
      github: 'https://github.com/jon-zawada/sidebar-service',
      youtube: ''
    },
    {
      name: 'Adventure Tide',
      description: '',
      tech: ['Javascript', 'React.js', 'React Hooks', 'React Charts 2', 'Moment.js', 'Node.js', 'Express', 'MySQL', 'AWS', 'Unirest'],
      bullets: [
        'Designed, developed, and deployed, in 2 days, a web application that allows users to monitor optimal ocean conditions and log their personalized experiences.',
        'Implemented smooth communication between multiple web APIs using Unirest to obtain realtime tide level data.',
        'Displayed tide level data per input location for an interactive and clean user experience through the use of React-Charts-2.'
      ],
      gif: '/images/tides.gif',
      icon: '/images/wave.png',
      id: 3,
      github: 'https://github.com/jon-zawada/Adventure-Tide',
      youtube: 'https://www.youtube.com/watch?v=ImaL2I_i88k&feature=youtu.be&ab_channel=JonathanZawada'
    },
  ]
};

module.exports = data;
