import { useState } from 'react';
import { IEpisode } from 'src/types';

export function EpisodeInfo({ episode }: { episode: IEpisode }) {
  const [showSummary, setShowSummary] = useState(false);
  const toggleSummary = () => {
    setShowSummary((prev) => !prev);
  };
  return (
    <div className="episode">
      <div onClick={toggleSummary} className="episode-info">
        <span>{`S${episode.season}-E${episode.number}`}</span>
        <span>{episode.name}</span>
        <span>{episode.airdate}</span>
      </div>
      {showSummary && (
        <div
          className="episode-summary"
          dangerouslySetInnerHTML={{ __html: episode.summary || 'No Summary' }}
        />
      )}
    </div>
  );
}
