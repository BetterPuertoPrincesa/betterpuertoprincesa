// Standalone pages that work like quick tools rather than service guides.
// Shown as "Everyday tools" on the Services page and in the Services menu.
export interface ServiceTool {
  label: string;
  href: string;
  description: string;
  icon: string;
}

export const serviceTools: ServiceTool[] = [
  {
    label: 'Emergency Hotlines',
    href: '/hotlines',
    description: 'Police, fire, rescue, and hospital numbers.',
    icon: 'Phone',
  },
  {
    label: 'Utility Advisories',
    href: '/advisories',
    description: 'Scheduled power and water interruptions.',
    icon: 'Zap',
  },
  {
    label: 'Public Markets',
    href: '/markets',
    description: 'Where the city markets are and when they open.',
    icon: 'Store',
  },
  {
    label: 'Tricycle Fare',
    href: '/fare-calculator',
    description: 'Work out the regular tricycle fare for a trip.',
    icon: 'Calculator',
  },
  {
    label: 'Minimum Wage',
    href: '/minimum-wage',
    description: 'Current daily minimum wage rates in MIMAROPA.',
    icon: 'Banknote',
  },
];
