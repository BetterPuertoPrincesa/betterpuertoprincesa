import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import NewsList from '../components/ui/NewsList';
import PageHeader from '../components/ui/PageHeader';
import BlogLink from '../components/ui/BlogLink';
import { news } from '../data/news';

const News: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <SEO
        title="Puerto Princesa in the News"
        description="Recent news about Puerto Princesa from the city government and local news sources, each linked to the original article."
        keywords="news, Puerto Princesa, Palawan, local news, city government"
      />
      <main className="flex-grow">
        <PageHeader title={t('news.title')} subtitle={t('news.subtitle')} />

        <Section>
          <div className="max-w-4xl">
            <BlogLink className="mb-6" />
            <NewsList
              items={[...news].sort((x, y) => y.date.localeCompare(x.date))}
            />
          </div>
        </Section>
      </main>
    </>
  );
};

export default News;
