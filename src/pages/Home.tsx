import { useState, useEffect } from 'react';
import { useMovies } from '../hooks/useMovies';
import Filters from '../components/Filters';
import MovieCard from '../components/MovieCard';
import '../styles/Home.css';

export default function Home() {
  const [filter, setFilter] = useState<'now_playing' | 'popular' | 'top_rated' | 'release_date' | 'trending'>('now_playing');
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const { movies, genres, hasMore, loading } = useMovies(filter, selectedGenre, page, debouncedSearch);

  return (
    <div className="home-container">
      <h1 className="home-title">
        <span className="highlight-title">Movie App - Unisales</span>{' '}
        <span className="subtitle">Sua jornada pelos melhores filmes começa aqui</span>
      </h1>

      <Filters
        filter={filter}
        setFilter={setFilter}
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        search={search}
        setSearch={setSearch}
      />

      <div className="home-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>

      {hasMore && !loading && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition"
          >
            Ver mais
          </button>
        </div>
      )}

      {loading && (
        <div className="text-center text-slate-400 mt-4">Carregando mais filmes...</div>
      )}
    </div>
  );
}
