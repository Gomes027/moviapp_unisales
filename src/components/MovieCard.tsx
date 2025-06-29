import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
  };
  genres: { id: number; name: string }[];
}

export default function MovieCard({ movie, genres }: MovieCardProps) {
  const getGenreNames = (ids: number[]) =>
    ids.map((id) => genres.find((g) => g.id === id)?.name).filter(Boolean).join(', ');

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <p className="movie-title">{movie.title}</p>
        <p className="movie-rating">⭐ {movie.vote_average.toFixed(1)}</p>
        <p className="movie-date">{movie.release_date}</p>
        <p className="movie-genres">🎭 {getGenreNames(movie.genre_ids)}</p>
      </div>
    </Link>
  );
}
