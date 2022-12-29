import { useFetch } from 'src/hooks';
import { tvmaze } from 'src/api';
import { EpisodeInfo, Spinner } from 'src/components';

export function Episodes({ id }: { id: string }) {
  const { data: episodesData, error, loading } = useFetch(() => tvmaze.shows.episodes(id), [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="list-container">
      {episodesData!.map((episode) => (
        <EpisodeInfo episode={episode} />
      ))}
    </div>
  );
}
