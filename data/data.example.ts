import { Data } from '../types';

const data: Data = {
  heading: 'Name Surname',
  sidebar: {
    sections: [
      {
        heading: 'Personal',
        content: [
          {
            key: 'E-mail',
            value: '<a href="mailto:example@example.com">example@example.com</a>',
          },
          {
            key: 'Address',
            value: 'City, Country',
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
    ]
  },
  main: [
    {
      heading: 'Skills',
      content: [
        {
          items: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Vestibulum suscipit maximus ultricies. Praesent id odio',
            'Donec tincidunt urna non nisl commodo maximus',
            'Curabitur tristique, magna a consectetur tincidunt',
          ],
        },
      ],
    },
    {
      heading: 'Experience',
      content: [
        {
          dates: ['2021/01 - present'],
          heading: 'Company',
          subheading: 'Position',
          items: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Vestibulum suscipit maximus ultricies. Praesent id odio',
            'Donec tincidunt urna non nisl commodo maximus',
            'Curabitur tristique, magna a consectetur tincidunt',
          ],
        },
      ],
    },
    {
      heading: 'Education',
      content: [
        {
          dates: ['2021/01 - 2021/01'],
          heading: 'Academy',
          subheading: 'Field of study',
          additional: '',
        },
      ],
    },
  ],
  clause:
    'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of&nbsp;Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
};

export default data;
