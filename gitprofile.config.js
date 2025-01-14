// gitprofile.config.js

const config = {
  github: {
    username: 'guilhermefmk', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'guilhermercunha',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://guilhermercunha.me',
    phone: '',
    email: 'guilhermefmk9@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1ELN_cGCITB9Gv95nC4zUJx3Y1nNJeMaSwjo0ynZitXE', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Pandas',
    'PySpark',
    'SQL',
    'Cloud computing(AWS/GCP)',
    'Mongodb',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Big data',
    'Java',
    'JavaScript'
  ],
  experiences: [
    {
      company: 'NTT Data',
      position: 'Data Engineer',
      from: 'July 2024',
      to: 'Present',
      companyLink: 'https://br.nttdata.com/',
    },
    {
      company: 'Eemovel Inteligência Imobiliária',
      position: 'Data Engineer',
      from: 'January 2024',
      to: 'July 2024',
      companyLink: 'https://eemovel.com.br/',
    },
    {
      company: 'Compass.uol',
      position: 'Data Engineer',
      from: 'February 2023',
      to: 'January 2024',
      companyLink: 'https://compass.uol/',
    },
    {
      company: 'Compass.uol',
      position: 'AWS Data engineer Intern',
      from: 'October 2022',
      to: 'December 2022',
      companyLink: 'https://compass.uol/',
    },
    {
      company: 'Vetorial Tecnologia',
      position: 'Helpdesk Analyst SR',
      from: 'October 2021',
      to: 'January 2023',
      companyLink: 'https://vetorial.net/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'IFRS - Campus Rio Grande',
      degree: 'Analysis and Systems Development',
      from: '2022',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Weather analisys',
      description:
        'Extração de dados meteorológicos do Weatherbit usando sua API REST, transformação e carregamento desses dados no Google Cloud Storage usando o Prefect.',
      imageUrl: 'https://fabianlee.org/wp-content/uploads/2021/01/gcp_logo.png',
      link: 'https://github.com/guilhermefmk/analise_metereologica_gcp',
    },
    {
      title: 'Twitter realtime analisys',
      description:
        'Estudo comparativo entre os dados disponibilizados pelo TSE em relação ao segundo turno das eleições de 2022 e os dados capturados via análise sentimental do twitter.',
      imageUrl: 'https://www.solvyng.io/wp-content/uploads/2021/10/aws-logo-1.png',
      link: 'https://github.com/guilhermefmk/Analise_de_sentimentos_twitter',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
