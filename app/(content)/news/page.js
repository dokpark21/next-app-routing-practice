import NewsList from '@/components/news-list/news-list';
import { getAllNews } from '@/lib/news';

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}

/** 아래 코드와 같이 next.js에서 client-side data fetching을 할 수 있다. 하지만 최선의 방법은 아니다. ssr의 장점을 더 이상 해당 페이지에서는 사용이 불가능해지기 때문이다.
 * 만약 꼭 아래와 같이 사용한다고 하더라도 가장 최하위 컴포넌트(가장 작은 부분 === client side 사용 최소화)에서만 사용하는 것이 좋다.
  export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setIsLoading(false);
        setError('Data fetching failed!');
      }

      setIsLoading(false);
      const news = await response.json();
      setNews(news);
    }
    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <div>
      <h1>News Page</h1>
      {newsContent}
    </div>
  );
}
 */
