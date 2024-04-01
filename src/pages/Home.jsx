import "./Home.css";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="intro">
      <section>
        <h1>Hi, I'm Julia Pasquarella</h1>
        <p>
          I’m a creative problem solver who’s passionate about transforming
          complex concepts into compelling and clear visual narratives.
        </p>
      </section>
      <p>Click <Link to="/work">here</Link> to see my work</p>
    </div>
  );
}
