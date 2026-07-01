import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Mock Interviews',
  tagline:
    'React Native mock interviews, interview questions, system design, and community-driven preparation by TechCraft By Subrata',
  url: 'https://TechCraft-By-Subrata.github.io',
  baseUrl: '/React-Native-Mock-Interviews/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.svg',
  trailingSlash: false,

  organizationName: 'TechCraft-By-Subrata',
  projectName: 'React-Native-Mock-Interviews',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/TechCraft-By-Subrata/React-Native-Mock-Interviews/edit/main/docs-site/',
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // `hashed` is recommended as long-term-cache of index file
        hashed: true,
        // language used to preprocess markdown and code block content
        language: ['en'],
        // whether to index the title of each doc page, default: true
        indexPages: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'react native mock interview, react native interview questions, react native system design, react native architecture, react native performance, techcraft by subrata, techcraft club, react native mastery',
        },
        {
          name: 'author',
          content: 'TechCraft By Subrata',
        },
        {
          name: 'robots',
          content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'React Native Mock Interviews',
        },
        {
          property: 'og:image',
          content:
            'https://techcraft-by-subrata.github.io/React-Native-Mock-Interviews/img/social-card.png',
        },
        {
          property: 'og:image:alt',
          content:
            'React Native Mock Interviews by TechCraft By Subrata',
        },
        {
          name: 'twitter:title',
          content: 'React Native Mock Interviews',
        },
        {
          name: 'twitter:description',
          content:
            'Community-driven React Native mock interviews, interview questions, architecture, performance, and system design guidance.',
        },
        {
          name: 'twitter:image',
          content:
            'https://techcraft-by-subrata.github.io/React-Native-Mock-Interviews/img/social-card.png',
        },
        {
          name: 'twitter:image:alt',
          content:
            'React Native Mock Interviews by TechCraft By Subrata',
        },
      ],
      navbar: {
        title: 'RN Mock Interviews',
        logo: {
          alt: 'TechCraft By Subrata',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            label: 'Overview',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'interview-format',
            label: 'Interview Format',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'volunteers',
            label: 'Volunteers',
            position: 'left',
          },
          {
            href: 'https://github.com/TechCraft-By-Subrata/React-Native-Mock-Interviews',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project',
            items: [
              {
                label: 'Overview',
                to: '/docs/intro',
              },
              {
                label: 'Interview Format',
                to: '/docs/interview-format',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TechCraft-By-Subrata/React-Native-Mock-Interviews',
              },
              {
                label: 'Volunteers',
                to: '/docs/volunteers',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'Contribution Guide',
                to: '/docs/contributing',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TechCraft By Subrata. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
