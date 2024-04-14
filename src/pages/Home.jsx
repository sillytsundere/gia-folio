import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col w-1/3">
        <h1 className="text-4xl text-darkTeal font-medium pb-8">Hi, I'm Julia Pasquarella</h1>
        <p className="text-base">
          I’m a creative problem solver who’s passionate about transforming
          complex concepts into compelling and clear visual narratives.
        </p>
      </section>
      <p>Click <Link to="/work">here</Link> to see my work</p>
    </main>
  );
}
