import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quickstart',
        'getting-started/installation',
      ],
    },
    {
      type: 'category', 
      label: 'Language Reference',
      collapsed: false,
      items: [
        'language/overview',
        'language/grammar',
        {
          type: 'category',
          label: 'Node Types',
          items: [
            'language/nodes/flow',
            'language/nodes/service', 
            'language/nodes/mapping',
            'language/nodes/schema',
            'language/nodes/value',
          ],
        },
        {
          type: 'category',
          label: 'Functions',
          items: [
            'language/functions/index',
            'language/functions/string-functions',
            'language/functions/date-functions',
            'language/functions/collection-functions',
            'language/functions/utility-functions',
          ],
        },
        {
          type: 'category',
          label: 'Expressions',
          items: [
            'language/expressions/index',
            'language/expressions/arithmetic',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      collapsed: false,
      items: [
        'advanced/index',
        'advanced/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Examples & Recipes', 
      collapsed: false,
      items: [
        'examples/index',
      ],
    },
  ],
};

export default sidebars;
