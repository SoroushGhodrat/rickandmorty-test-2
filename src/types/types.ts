// Purpose: Define types for the Rick and Morty API.

// Common Info-related types
export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

// Location-related types
export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface ApiLocationResponse {
  info: Info;
  results: Location[];
}

// Episode-related types
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface ApiEpisodeResponse {
  info: Info;
  results: Episode[];
}

// Character-related types
export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiCharacterResponse {
  info: Info;
  results: Character[];
}
