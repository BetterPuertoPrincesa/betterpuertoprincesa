import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import CategoryList, { type CategoryItem } from '../ui/CategoryList';
import { useTranslation } from '../../hooks/useTranslation';
import { serviceGroups } from '../../data/yamlLoader';
import { serviceTools } from '../../data/serviceTools';

// Every service, bundled into a few general groups so the list is easy to
// scan. Each group has an anchor (/services#<id>) used by the nav and footer.
export default function ServicesSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { t } = useTranslation();

  return (
    <Section>
      <Heading level={1}>{title || t('services.title')}</Heading>
      <Text className="mb-10 text-lg text-gray-600">
        {description || t('services.description')}
      </Text>

      <section id="tools" className="mb-12 scroll-mt-40">
        <Heading level={2}>{t('services.toolsTitle')}</Heading>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceTools.map(tool => {
            const Icon = LucideIcons[tool.icon as keyof typeof LucideIcons] as
              | React.ComponentType<{ className?: string }>
              | undefined;
            return (
              <li key={tool.href}>
                <Link
                  to={tool.href}
                  className="group flex h-full items-start gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:border-balayong-300 hover:bg-balayong-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-balayong-100 text-balayong-700">
                    {Icon && <Icon className="h-4 w-4" />}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-gray-900 group-hover:text-primary-700">
                      {tool.label}
                    </span>
                    <span className="block text-sm text-gray-600">
                      {tool.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {serviceGroups.map(group => (
        <section key={group.id} id={group.id} className="mb-12 scroll-mt-40">
          <Heading level={2}>{group.name}</Heading>
          <Text className="mb-4 text-gray-600">{group.description}</Text>
          <CategoryList
            items={group.categories as CategoryItem[]}
            basePath="/services"
            columns={2}
          />
        </section>
      ))}
    </Section>
  );
}
