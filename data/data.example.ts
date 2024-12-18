import { Data } from '../types';

const data: Data = {
  heading: 'Name Surname',
  sidebar: {
    sections: [
      {
        heading: 'Personal',
        content: [
          {
            key: 'Email',
            value: '<a href="mailto:example@example.com">example@example.com</a>',
          },
        ],
      },
      {
        heading: 'COMPETENCIES',
        content: [
          {
            values: [
              'Lorem ipsum dolor sit amet',
              'Vestibulum suscipit maximus ultricies',
              'Curabitur tristique',
            ],
          },
        ],
      },
      {
        heading: 'Languages',
        content: [
          {
            key: 'English',
            value: 'level',
          },
          {
            key: 'Other',
            value: 'level',
          },
        ],
      },
      {
        heading: 'EDUCATION',
        content: [
          {
            key: 'University',
            value: 'Field of study',
            annotation: 'Title',
          },
        ],
      },
      {
        heading: 'Links',
        content: [
          {
            key: 'LinkedIn',
            value: '<a href="https://linkedin.com">linkedin.com</a>',
          },
          {
            key: 'Github',
            value: '<a href="https://github.com">github.com</a>',
          },
        ],
      },
    ],
  },
  main: [
    {
      heading: 'Experience',
      content: [
        {
          dates: ['2010/01 - present'],
          heading: {
            label: 'Company',
            href: 'https://example.com',
          },
          items: [
            {
              heading: {
                label: 'Project',
                annotation: '(5 years)',
              },
              bullets: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Vestibulum suscipit maximus ultricies. Praesent id odio',
                'Donec tincidunt urna non nisl commodo maximus',
                'Curabitur tristique, magna a consectetur tincidunt',
              ],
              additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
              heading: {
                label: 'Project 2',
                annotation: '(5 years)',
              },
              bullets: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Vestibulum suscipit maximus ultricies. Praesent id odio',
                'Donec tincidunt urna non nisl commodo maximus',
                'Curabitur tristique, magna a consectetur tincidunt',
              ],
              additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
          ],
        },
        {
          dates: ['2000/01 - 2009/12'],
          heading: {
            label: 'Company',
            href: 'https://example.com',
          },
          items: [
            {
              heading: {
                label: 'Project',
                annotation: '(5 years)',
              },
              bullets: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Vestibulum suscipit maximus ultricies. Praesent id odio',
                'Donec tincidunt urna non nisl commodo maximus',
                'Curabitur tristique, magna a consectetur tincidunt',
              ],
              additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
            {
              heading: {
                label: 'Project',
                annotation: '(5 years)',
              },
              bullets: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Vestibulum suscipit maximus ultricies. Praesent id odio',
                'Donec tincidunt urna non nisl commodo maximus',
                'Curabitur tristique, magna a consectetur tincidunt',
              ],
              additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            },
          ],
        },
      ],
    },
  ],
  clause:
    'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of&nbsp;Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
};

export default data;
