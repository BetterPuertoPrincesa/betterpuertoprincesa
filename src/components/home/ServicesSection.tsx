import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import PageHeader from '../ui/PageHeader';
import CategoryList, { type CategoryItem } from '../ui/CategoryList';
import { useTranslation } from '../../hooks/useTranslation';
import { serviceGroups } from '../../data/yamlLoader';
import { serviceTools } from '../../data/serviceTools';

function iconFor(name: string) {
  return LucideIcons[name as keyof typeof LucideIcons] as
    | React.ComponentType<{ className?: string }>
    | undefined;
}

const LINK_CLASSES =
  'rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-bold text-gray-800 transition-colors hover:border-balayong-300 hover:bg-balayong-50 hover:text-balayong-800';

// The /services index: quick tools first, then every category bundled into
// a few general groups. Each group has an anchor (/services#<id>) used by
// the jump links here, the nav menu, and the footer.
export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t('services.title')}
        subtitle={t('services.description')}
      />

      <Section>
        <nav aria-label={t('services.jumpTo')} className="mb-12">
          <ul className="flex flex-wrap gap-2">
            <li>
              <a href="#tools" className={LINK_CLASSES}>
                {t('services.toolsTitle')}
              </a>
            </li>
            {serviceGroups.map(group => (
              <li key={group.id}>
                <a href={`#${group.id}`} className={LINK_CLASSES}>
                  {group.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="tools" className="mb-14 scroll-mt-40">
          <h2 className="mb-4 font-display text-2xl text-gray-900">
            {t('services.toolsTitle')}
          </h2>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {serviceTools.map(tool => {
              const Icon = iconFor(tool.icon);
              return (
                <li key={tool.href}>
                  <Link
                    to={tool.href}
                    className="group flex h-full flex-col gap-2 rounded-xl border border-gray-200 p-4 transition-colors hover:border-balayong-300 hover:bg-balayong-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-balayong-100 text-balayong-700">
                      {Icon && <Icon className="h-4 w-4" />}
                    </span>
                    <span className="font-bold leading-snug text-gray-900 group-hover:text-primary-700">
                      {tool.label}
                    </span>
                    <span className="text-sm leading-snug text-gray-600">
                      {tool.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="space-y-14">
          {serviceGroups.map(group => {
            const Icon = iconFor(group.icon);
            return (
              <section
                key={group.id}
                id={group.id}
                className="grid scroll-mt-40 gap-6 border-t-4 border-primary-800 pt-6 lg:grid-cols-[16rem_1fr] lg:gap-10"
              >
                <header>
                  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary-800 text-white">
                    {Icon && <Icon className="h-5 w-5" />}
                  </span>
                  <h2 className="font-display text-2xl leading-snug text-gray-900">
                    {group.name}
                  </h2>
                  <p className="mt-2 text-gray-600">{group.description}</p>
                </header>
                <CategoryList
                  items={group.categories as CategoryItem[]}
                  basePath="/services"
                  columns={2}
                />
              </section>
            );
          })}
        </div>
      </Section>
    </>
  );
}
