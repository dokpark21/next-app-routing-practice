import { DUMMY_NEWS } from '@/dummy-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
      </header>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
    </article>
  );
}
