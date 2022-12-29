import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Episodes, Cast, Spinner, ShowMainInfo } from 'src/components';
import { tvmaze } from 'src/api';
import { useFetch } from 'src/hooks';

type TShowTab = 'episodes' | 'cast';

export function Show() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<TShowTab>('cast');
  const {
    data: showData,
    error: message,
    loading,
  } = useFetch(() => tvmaze.shows.get(id!, 'cast'), [id]);

  const clickTab = (selected: TShowTab) => () => {
    setActiveTab(selected);
  };

  if (loading) {
    return <Spinner />;
  }

  if (message) {
    return <p>{message}</p>;
  }

  return showData ? (
    <div className="showpage">
      <div className="width800">
        <ShowMainInfo showData={showData} />
        <div className="tabbed">
          <div className="tabbed__menu">
            <div className={activeTab === 'cast' ? 'tab active' : 'tab'} onClick={clickTab('cast')}>
              Cast
            </div>
            <div
              className={activeTab === 'episodes' ? 'tab active' : 'tab'}
              onClick={clickTab('episodes')}
            >
              Episodes
            </div>
          </div>
          <div className="tabbed__content">
            {activeTab === 'episodes' ? (
              <Episodes id={id!} />
            ) : (
              <Cast cast={showData._embedded!.cast!} />
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
