import MainHeaderLink from './main-header-link';
import Link from 'next/link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <MainHeaderLink href="/news">News</MainHeaderLink>
          </li>
          <li>
            <MainHeaderLink href="/archive">Archive</MainHeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
