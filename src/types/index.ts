export interface ISchedule {
  time: string;
  days: string[];
}

export interface IRating {
  average: number;
}

export interface ICountry {
  name: string;
  code: string;
  timezone: string;
}

export interface INetwork {
  id: number;
  name: string;
  names: string;
  country: ICountry;
}

export interface IExternals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface IImage {
  medium: string;
  original: string;
}

export interface ILink {
  href: string;
}

export interface ILinks {
  self?: ILink;
  previousepisode?: ILink;
  show?: ILink;
  character?: ILink;
}

export interface IEmbedded {
  show?: IShow;
  seasons?: ISeason[];
  episodes?: IEpisode[];
  cast?: ICast[];
  castcredits?: ICastCredits[];
  crew?: ICrew[];
  crewcredits?: ICrewCredits[];
  akas?: IAKA[];
}

export interface IAKA {
  name: string;
  country: ICountry;
}

export interface ICrewCredits {
  type: string;
  _links: ILinks;
}

export interface ICastCredits {
  _links: ILinks;
}

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: IRating;
  image: IImage;
  summary: string;
  show: IShow;
  _links: ILinks;
  _embedded: IEmbedded;
}

export interface ISeason {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: INetwork;
  webChannel: string | null;
  image: IImage;
  summary: string;
  _links: ILinks;
}

export interface IUpdates {
  [key: number]: number;
}

export interface Iperson {
  id: number;
  url: string;
  country: ICountry;
  birtday: string;
  deathday: string | null;
  gender: string;
  image: IImage;
  name: string;
  updated: number;
  _links: ILinks;
}

export interface ICharacter {
  id: number;
  url: string;
  name: string;
  image?: IImage;
  _links: ILinks;
}

export interface ICast {
  person: Iperson;
  character: ICharacter;
  self: boolean;
  voice: boolean;
}

export interface ICrew {
  type: string;
  person: Iperson;
}

export interface IShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended?: string;
  officialSite: string;
  schedule: ISchedule;
  rating: IRating;
  weight: number;
  network: INetwork | null;
  webChannel: string | null;
  externals: IExternals;
  image: IImage;
  summary: string;
  updated: number;
  _links: ILinks;
  _embedded?: IEmbedded;
}

export interface IShowSearch {
  score: number;
  show: IShow;
}
