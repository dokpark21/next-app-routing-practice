export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <header>
        <h1>Archive</h1>
      </header>
      <section>{archive}</section>
      <section>{latest}</section>
    </div>
  );
}
