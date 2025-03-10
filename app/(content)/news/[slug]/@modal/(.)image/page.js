import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';
import Modal from '@/components/news-list/modal';

export default async function InterceptedImagePage({ params }) {
  const newsImageSlug = params.slug;
  const newsItem = await getNewsItem(newsImageSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <Modal />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
