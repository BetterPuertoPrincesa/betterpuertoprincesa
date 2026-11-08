import type { NavigationItem } from '../types';
import { serviceGroups } from './yamlLoader';
import { serviceTools } from './serviceTools';
import { BLOG_URL } from './news';

// The Services menu and footer link to the general groups on /services
// rather than listing every category.
const serviceGroupLinks = serviceGroups.map(group => ({
  label: group.name,
  href: `/services#${group.id}`,
}));

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      ...serviceGroupLinks,
      ...serviceTools.map(({ label, href }, i) => ({
        label,
        href,
        dividerBefore: i === 0,
      })),
    ],
  },
  {
    label: 'Government',
    href: '/government/departments',
    children: [
      { label: 'Executive', href: '/government/departments/executive' },
      { label: 'Legislative', href: '/government/departments/legislative' },
    ],
  },
  { label: 'Statistics', href: '/statistics' },
  { label: 'Transparency', href: 'https://budget.betterpuertoprincesa.org/' },
  { label: 'News', href: '/news' },
  { label: 'Blog', href: BLOG_URL },
];

export const footerNavigation = {
  mainSections: [
    {
      title: 'Services',
      links: [
        { label: 'Every service', href: '/services' },
        ...serviceGroupLinks,
        { label: 'Everyday tools', href: '/services#tools' },
      ],
    },
    {
      title: 'Puerto Princesa',
      links: [
        {
          label: "Citizen's Charter",
          href: 'https://puertoprincesa.ph/citizens-charter/',
        },
        { label: 'City Government Website', href: 'https://puertoprincesa.ph' },
        { label: 'Population and land', href: '/statistics' },
        { label: 'Where the money goes', href: '/transparency' },
        { label: 'In the news', href: '/news' },
        { label: 'Our blog', href: BLOG_URL },
        { label: 'Mining Watch', href: '/mining-watch' },
      ],
    },
    {
      title: 'Government',
      links: [
        { label: 'Open Data', href: 'https://data.gov.ph' },
        { label: 'Freedom of Information', href: 'https://www.foi.gov.ph' },
        {
          label: 'Contact Center',
          href: 'https://contactcenterngbayan.gov.ph',
        },
        {
          label: 'Official Gazette',
          href: 'https://www.officialgazette.gov.ph',
        },
      ],
    },
  ],
  socialLinks: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/betterpuertoprincesa',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/BetterPuertoPrincesa/betterpuertoprincesa',
    },
    { label: 'Discord', href: 'https://discord.gg/DzwTq7MjfS' },
  ] as { label: string; href: string | null }[],
};
