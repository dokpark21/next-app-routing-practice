import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from '@/lib/news';
import NewsList from '@/components/news-list/news-list';
import Link from 'next/link';
import { Suspense } from 'react';

async function FilterHeader({ selectedYear, selectedMonth }) {
  const availableYear = await getAvailableNewsYears();
  let links = availableYear;

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    links = [];
  }

  if (
    (selectedYear && !availableYear.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error('Invalid filter');
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ selectedYear, selectedMonth }) {
  let news;
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  let newsContent = <p>No news found for the selected year and month.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

// Suspense를 사용하여 세밀한 로딩 상태를 관리.

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Filter is loading...</p>}>
        <FilterHeader
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>
      <Suspense fallback={<p>News is loading...</p>}>
        <FilteredNews
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>
    </>
  );
}
