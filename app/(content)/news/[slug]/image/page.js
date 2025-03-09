import { notFound } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-data';

export default function ImagePage({ params }) {
  const newsImageSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsImageSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
