import axios from 'axios';
import {
  IAKA,
  ICast,
  ICastCredits,
  ICrew,
  ICrewCredits,
  IEpisode,
  Iperson,
  ISeason,
  IShow,
  IShowSearch,
  IUpdates,
} from 'src/types';

const apiBase = 'https://api.tvmaze.com';

async function apiClient<T>(endpoint: string) {
  const sessionData = sessionStorage.getItem(endpoint);
  if (sessionData) {
    return JSON.parse(sessionData) as T;
  }
  const source = axios.CancelToken.source();
  const { data } = await axios.get<T>(apiBase + endpoint, {
    cancelToken: source.token,
  });
  sessionStorage.setItem(endpoint, JSON.stringify(data));
  return data;
}

class Search {
  public shows(query: string) {
    return apiClient<IShowSearch[]>(`/search/shows?q=${query}`);
  }
  public people(query: string) {
    return apiClient(`/search/people?q=${query}`);
  }
}

class SingleSearch {
  public shows(query: string) {
    return apiClient<IShow>(`/singlesearch/shows?q=${query}`);
  }
}

class Lookup {
  public imdb(imdbId: string) {
    return apiClient<IShow>(`/lookup/shows?imdb=${imdbId}`);
  }
  public thetvdb(thetvdbId: string) {
    return apiClient<IShow>(`/lookup/shows?thetvdb=${thetvdbId}`);
  }
  public tvrage(tvrageId: string) {
    return apiClient<IShow>(`/lookup/shows?tvrage=${tvrageId}`);
  }
  public tvmaze(tvmazeId: string) {
    return apiClient<IShow>(`/shows/${tvmazeId}`);
  }
}

class Shows {
  public get(id: string, embedded?: string | string[]) {
    let queryString = `/shows/${id}`;
    if (embedded) {
      if (typeof embedded === typeof []) {
        queryString += '?';
        embedded = embedded as string[];
        embedded.forEach((embed) => {
          queryString += `embed[]=${embed}&`;
        });
      } else {
        queryString += `?embed=${embedded}`;
      }
    }
    return apiClient<IShow>(queryString);
  }

  public episodes(id: string, specials?: boolean) {
    let queryString = `/shows/${id}/episodes`;
    if (specials) queryString += '?specials=1';
    return apiClient<IEpisode[]>(queryString);
  }

  public episodebynumber(id: string, season: string, episode: string) {
    return apiClient<IEpisode>(`/shows/${id}/episodebynumber?season=${season}&number=${episode}`);
  }

  public episodesbydate(id: string, date: string) {
    return apiClient<IEpisode>(`/shows/${id}/episodesbydate?date=${date}`);
  }

  public seasons(id: string) {
    return apiClient<ISeason[]>(`/shows/${id}/seasons`);
  }

  public seasonEpisodes(seasonId: string) {
    return apiClient<IEpisode[]>(`/seasons/${seasonId}/episodes`);
  }

  public cast(id: string) {
    return apiClient<ICast[]>(`/shows/${id}/cast`);
  }

  public crew(id: string) {
    return apiClient<ICrew[]>(`/shows/${id}/crew`);
  }

  public akas(id: string) {
    return apiClient<IAKA[]>(`/shows/${id}/akas`);
  }

  public page(page?: string) {
    return apiClient<IShow[]>(`/shows?page=${page || ''}`);
  }

  public updates() {
    return apiClient<IUpdates>(`/updates/shows`);
  }
}

class People {
  public get(id: string, embeded?: string | string[]) {
    let queryString = `/people/${id}`;
    if (embeded) {
      if (typeof embeded === typeof []) {
        queryString += '?';
        embeded = embeded as string[];
        embeded.forEach((embed) => {
          queryString += `embed[]=${embed}&`;
        });
      } else {
        queryString += `?embed=${embeded}`;
      }
    }
    return apiClient<Iperson>(queryString);
  }

  public castCredits(id: string, embeded?: string | string[]) {
    let queryString = `/people/${id}/castcredits`;
    if (embeded) {
      if (typeof embeded === typeof []) {
        queryString += '?';
        embeded = embeded as string[];
        embeded.forEach((embed) => {
          queryString += `embed[]=${embed}&`;
        });
      } else {
        queryString += `?embed=${embeded}`;
      }
    }
    return apiClient<ICastCredits[]>(queryString);
  }

  public crewCredits(id: string, embeded?: string | string[]) {
    let queryString = `/people/${id}/crewcredits`;
    if (embeded) {
      if (typeof embeded === typeof []) {
        queryString += '?';
        embeded = embeded as string[];
        embeded.forEach((embed) => {
          queryString += `embed[]=${embed}&`;
        });
      } else {
        queryString += `?embed=${embeded}`;
      }
    }
    return apiClient<ICrewCredits[]>(queryString);
  }
}

export class Tvmaze {
  public search = new Search();
  public singleSearch = new SingleSearch();
  public lookup = new Lookup();
  public shows = new Shows();
  public people = new People();

  public schedule(country?: string, date?: string) {
    let queryString = '/schedule?';
    if (country) queryString += `country=${country}&`;
    if (country) queryString += `date=${date}`;
    return apiClient<IEpisode[]>(queryString);
  }

  public fullSchedule() {
    return apiClient('/schedule/full');
  }
}

export const tvmaze = new Tvmaze();
