import { useEffect, useState } from 'react';
import api from '../services/api';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
}

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface Trailer {
  key: string;
  site: string;
  type: string;
}

type FilterOption = 'popular' | 'top_rated' | 'now_playing' | 'release_date' | 'trending';

export const useMovies = (filter: FilterOption, selectedGenre: number | null, page: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [cast, setCast] = useState<Cast[]>([]);
  const [trailer, setTrailer] = useState<Trailer | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data } = await api.get('/genre/movie/list');
        setGenres(data.genres);
      } catch (err) {
        console.error('Erro ao buscar gêneros:', err);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    setMovies([]);
    setHasMore(true);
  }, [filter, selectedGenre]);

  useEffect(() => {
    loadMovies();
  }, [page, filter, selectedGenre]);

  const loadMovies = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    let endpoint = `/movie/${filter === 'release_date' ? 'now_playing' : filter}`;
    if (filter === 'trending') endpoint = '/trending/movie/day';
    if (selectedGenre !== null) endpoint = '/discover/movie';

    try {
      const { data } = await api.get(endpoint, {
        params: {
          page,
          with_genres: selectedGenre ?? undefined,
        },
      });

      const newMovies = filter === 'release_date'
        ? data.results.sort(
            (a: Movie, b: Movie) =>
              new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
          )
        : data.results;

      setMovies((prev) => [...prev, ...newMovies]);

      if (data.page >= data.total_pages || newMovies.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMovieDetails = async (id: string) => {
    try {
      setLoadingDetails(true);

      const [detailsRes, creditsRes, videosRes] = await Promise.all([
        api.get(`/movie/${id}`),
        api.get(`/movie/${id}/credits`),
        api.get(`/movie/${id}/videos`)
      ]);

      setMovieDetails(detailsRes.data);
      setCast(creditsRes.data.cast.slice(0, 5));

      const trailerVideo = videosRes.data.results.find(
        (v: Trailer) => v.site === 'YouTube' && v.type === 'Trailer'
      );
      setTrailer(trailerVideo || null);
    } catch (error) {
      console.error('Erro ao carregar detalhes do filme:', error);
    } finally {
      setLoadingDetails(false);
    }
  };

  return {
    movies,
    genres,
    hasMore,
    loading,
    // 🔽 Detalhes expostos
    movieDetails,
    cast,
    trailer,
    loadingDetails,
    loadMovieDetails
  };
};
