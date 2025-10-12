import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wolf DSL',
  tagline: 'Declarative service orchestration and data transformation',
  favicon: 'img/wolf-favicon.ico',

  // Production URL configuration
  url: 'https://wolf-dsl.github.io',
  baseUrl: '/wolf-dsl-docs/',

  // GitHub pages deployment config
  organizationName: 'wolf-DSL',
  projectName: 'wolf-dsl-docs',

  onBrokenLinks: 'warn',

  // Internationalization (if needed in future)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
        indexBaseUrl: true,
        
        // Limit what gets indexed to reduce size
        includeRoutes: [
          '/wolf-dsl-docs/language/**',
          '/wolf-dsl-docs/getting-started/**',
        ],
        
        // Exclude specific paths
        excludeRoutes: [
          '/search',
          '/404.html',
          '/wolf-dsl-docs/examples/**',
          '/wolf-dsl-docs/advanced/**',
        ],
        
        // Only index h1 and h2 headings, skip h3 and deeper
        // This significantly reduces the number of indexed documents
        excludeTags: ['h3', 'h4', 'h5', 'h6'],
        
        // Note: Lunr.js has built-in stop words (the, a, and, in, of, etc.)
        // We're letting it use the defaults instead of replacing them
        
        // Search result settings
        maxHits: 8,
        
        // Performance
        indexDocSidebarParentCategories: 0,
        disableVersioning: true,
        highlightSearchTermsOnTargetPage: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs', // Documentation content is in docs directory
          routeBasePath: '/', // Serve docs at site root
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/wolf-DSL/wolf-dsl-docs/tree/main/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/wolf-social-card.jpg',
    navbar: {
      title: 'Wolf DSL',
      logo: {
        alt: 'Wolf DSL Logo',
        src: 'img/wolf-logo.svg',
        srcDark: 'img/wolf-logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: '/examples',
          label: 'Examples',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/wolf-DSL',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/quickstart',
            },
            {
              label: 'Language Reference',
              to: '/language/overview',
            },
            {
              label: 'Examples & Recipes',
              to: '/examples',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/wolf-DSL/wolf-dsl-docs/discussions',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/wolf-dsl',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/wolf-dsl',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wolf-DSL',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/wolf-DSL/wolf-dsl-docs/blob/main/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wolf DSL Contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'gradle', 'groovy', 'bash'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
          block: {start: 'error-start', end: 'error-end'},
        },
      ],
    },
    // Local search configuration (no external service required)
    // Automatically indexes all documentation content
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'new_docs',
      content:
        'Welcome to Wolf DSL! <a target="_blank" rel="noopener noreferrer" href="/getting-started/quickstart">Get started with your first flow →</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
