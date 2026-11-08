import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BLOG_URL } from '../../data/news';

// Points readers from the outside-news list to our own write-ups on the blog.
export default function BlogLink({ className = '' }: { className?: string }) {
  const { t } = useTranslation('common');
  return (
    <p className={`text-gray-700 ${className}`}>
      {t('news.blogPrompt')}{' '}
      <a
        href={BLOG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-bold text-primary-700 underline decoration-primary-200 decoration-2 underline-offset-4 hover:decoration-primary-600"
      >
        {t('news.blogLink')}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </p>
  );
}
