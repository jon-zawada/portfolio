const data = {
  1: {
    name: 'Relax.ly',
    description: 'A lodging or vacation reservation service calendar component',
    tech: [],
    bullets: [
      'Designed realtime calendar with React and Javascript to optimize client input through conditional rendering.',
      'Architected SQL schema to maintain data normalization for individual reservation locations.',
      'Created RESTful API routes with Express to ensure simple yet effective communication between front and back end.'
    ],
    gif: '',
    icon: '/images/relaxly.png',
    id: 1
  },
  2: {
    name: 'Nimbus',
    description: 'A music streaming service sidebare component',
    tech: [],
    bullets: [
      `Distributed workload on Node servers by implementing an Nginx round-robin load balancer and improved throughput
      from ~550rps to ~1000rps and average request latency to 29ms.`,
      'Implemented an Nginx cache to improve query speeds by 90% (~300ms to ~29ms).',
      'Utilized New Relic and Loader.io to diagnose and determine server and database bottlenecks.'
    ],
    gif: '',
    icon: '/images/headphones.svg',
    id: 2
  },
  3: {
    name: 'Adventure Tide',
    description: 'A real time ocean tide tracking application',
    tech: [],
    bullets: [
      'Designed, developed, and deployed, in 2 days, a web application that allows users to monitor optimal ocean conditions and log their personalized experiences.',
      'Implemented smooth communication between multiple web APIs using Unirest to obtain realtime tide level data.',
      'Displayed tide level data per input location for an interactive and clean user experience through the use of React-Charts-2.'
    ],
    gif: '/images/tides1.gif',
    icon: '/images/wave1.png',
    id: 3
  },
  projects: [
    {
      name: 'Relax.ly',
      description: '',
      tech: [],
      bullets: [
        'Designed realtime calendar with React and Javascript to optimize client input through conditional rendering.',
        'Architected SQL schema to maintain data normalization for individual reservation locations.',
        'Created RESTful API routes with Express to ensure simple yet effective communication between front and back end.'
      ],
      gif: '',
      icon: '/images/relaxly.png',
      id: 1
    },
    {
      name: 'Nimbus',
      description: '',
      tech: [],
      bullets: [
        `Distributed workload on Node servers by implementing an Nginx round-robin load balancer and improved throughput
        from ~550rps to ~1000rps and average request latency to 29ms.`,
        'Implemented an Nginx cache to improve query speeds by 90% (~300ms to ~29ms).',
        'Utilized New Relic and Loader.io to diagnose and determine server and database bottlenecks.'
      ],
      gif: '',
      icon: '/images/headphones.svg',
      id: 2
    },
    {
      name: 'Adventure Tide',
      description: '',
      tech: [],
      bullets: [
        'Designed, developed, and deployed, in 2 days, a web application that allows users to monitor optimal ocean conditions and log their personalized experiences.',
        'Implemented smooth communication between multiple web APIs using Unirest to obtain realtime tide level data.',
        'Displayed tide level data per input location for an interactive and clean user experience through the use of React-Charts-2.'
      ],
      gif: '/images/tides1.gif',
      icon: '/images/wave1.png',
      id: 3
    },
  ]
};

module.exports = data;
