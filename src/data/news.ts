// Stories about Puerto Princesa as reported by outside news sources. Each
// entry links to the original article and names who published it. Do not
// fabricate entries: add only real, published articles with working URLs.
// Our own write-ups live on the blog (see BLOG_URL), not here.

export const BLOG_URL = 'https://blog.betterpuertoprincesa.org/';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  /** Publisher name as shown to readers, e.g. "City Government of Puerto Princesa". */
  source: string;
  category: string;
  summary: string;
  url: string;
}

export const news: NewsItem[] = [
  {
    id: 'mayor-bayron-supports-lgsf-initiatives',
    title: 'Mayor Bayron Supports National Government Program Initiatives',
    date: '2026-03-06',
    source: 'City Government of Puerto Princesa',
    category: 'Announcement',
    summary:
      'Mayor Lucilo R. Bayron reaffirmed the support of the City Government of Puerto Princesa for national priority programs after participating in the Cities Information Session on the Local Government Support Fund (LGSF).',
    url: 'https://puertoprincesa.ph/articles/mayor-bayron-supports-national-government-program-initiatives/',
  },
  {
    id: 'puerto-princesa-cmci-2024-ranking',
    title: 'Puerto Princesa Ranked Among Most Competitive Cities in DTI Index',
    date: '2026-03-31',
    source: 'City Government of Puerto Princesa',
    category: 'Announcement',
    summary:
      'Puerto Princesa achieved a ranking of 16th overall among Highly Urbanized Cities in the Cities and Municipalities Competitiveness Index (CMCI) with a score of 40.23.',
    url: 'https://puertoprincesa.ph/articles/puerto-princesa-among-most-competitive-cities-in-2024-dti-index/',
  },
];
