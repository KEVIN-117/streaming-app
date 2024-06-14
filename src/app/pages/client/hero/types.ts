interface MovieProps{
    id: number;
    title: string;
    posterPath: string;
    backdropPath: string;
    overview: string;
    genres: string[];
    cast: CastProps[];
    trailer: string;
    details: MovieDetails;
}

interface MovieDetails{
  releaseDate: string;
  voteAverage: number;
  duration: number;
}

interface CastProps{
  name: string;
  character: string;
  profilePath: string;
}

export type { MovieProps, MovieDetails, CastProps };

