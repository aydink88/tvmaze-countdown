import { Link } from 'react-router-dom';
import { tvmaze } from 'src/api';
import { type FormEventHandler, useState } from 'react';
import { IShowSearch } from 'src/types';
import { Spinner } from 'src/components';
import { NO_IMAGE } from 'src/config';

export function Search() {
  const [results, setResults] = useState<IShowSearch[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const searchShows: FormEventHandler = (e) => {
    e.preventDefault();
    tvmaze.search
      .shows(searchTerm)
      .then((d) => {
        setResults(d);
        setMessage('');
      })
      .catch(() => {
        setMessage('Something Went Wrong');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Spinner />;
  }

  if (message) {
    return <p>{message}</p>;
  }

  console.log(results);

  return (
    <div>
      <form className="searchform" onSubmit={searchShows}>
        <div className="searchform__input">
          <input
            type="text"
            placeholder="Type to look up shows"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="button">
          Search
        </button>
        <button type="reset" className="button button-outline">
          Clear
        </button>
      </form>
      <div className="grid-content">
        {results.length
          ? results!.map(({ show }) => {
              const bgImage = show.image?.medium || NO_IMAGE;
              return (
                <div
                  className="card"
                  key={show.id}
                  style={{
                    backgroundImage: `url(${bgImage})`,
                  }}
                >
                  <Link to={`/show/${show!.id}`}>
                    <div className="card__content">
                      <div className="card__title">{show.name}</div>
                      <span>
                        {show.premiered ? show.premiered.split('-')[0] + '-' : '-'}
                        {show.ended?.slice(0, 4) || ''}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
