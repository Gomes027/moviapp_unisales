import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovies } from '../hooks/useMovies';
import '../styles/Details.css';

import MovieInfo from '../components/MovieInfo';
import CastList from '../components/CastList';
import Trailer from '../components/Trailer';

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    movieDetails,
    cast,
    trailer,
    loadingDetails,
    loadMovieDetails
  } = useMovies('now_playing', null, 1);

  useEffect(() => {
    if (id) {
      loadMovieDetails(id);
    }
  }, [id]);

  if (loadingDetails || !movieDetails) {
    return <div className="details-container">Carregando...</div>;
  }

  return (
    <div className="details-container">
      <button
        onClick={() => navigate('/')}
        className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-500 transition mb-4"
      >
        Voltar
      </button>

      <div className="flex-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="poster-details"
        />
        <div className="details-content">
          <MovieInfo movie={movieDetails} />
          <CastList cast={cast} />
        </div>
      </div>

      <Trailer trailer={trailer} />
    </div>
  );
}
