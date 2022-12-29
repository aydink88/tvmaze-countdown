import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="header">
      <div className="header__logo">TVGUIDE</div>
      <div className="header__nav">
        <ul>
          <li>
            <Link to="/">Countdown</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
