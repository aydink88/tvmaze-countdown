import { tvmaze } from 'src/api';
import { airstampDifference, formatDate } from 'src/utils';
import { useFetch } from 'src/hooks';
import { Link } from 'react-router-dom';
import { Spinner } from 'src/components';
import { NO_IMAGE } from 'src/config';

export function Home() {
  const { data: todaySchedule, error: message, loading } = useFetch(tvmaze.schedule);

  if (loading) {
    return <Spinner />;
  }

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <div>
      <div className="list-container">
        {todaySchedule!.map((item) => (
          <div key={item.id} className="listshow">
            <div className="listshow__info">
              <div className="listshow__image">
                <img src={item.show!.image?.medium ?? NO_IMAGE} alt="poster" />
              </div>

              <div className="listshow__details">
                <Link to={`/show/${item.show!.id}`}>
                  <div className="listshow__title">{item.show!.name}</div>
                </Link>
                <div className="listshow__episode">{`${item.season}x${item.number}`}</div>
              </div>
            </div>
            <div className="listshow__time">
              <div className="listshow__timeago">
                {airstampDifference(item.airstamp, Date.now())}
              </div>
              <div className="listshow__timestamp">{formatDate(new Date(item.airstamp))}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
