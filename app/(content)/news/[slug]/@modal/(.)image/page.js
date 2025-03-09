'use client';

import { notFound, useRouter } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-data';

export default function InterceptedImagePage({ params }) {
  const router = useRouter();

  const newsImageSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsImageSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
