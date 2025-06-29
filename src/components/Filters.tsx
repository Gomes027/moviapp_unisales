import SearchInput from './SearchInput';

type FilterOption = 'popular' | 'top_rated' | 'now_playing' | 'release_date' | 'trending';

interface FiltersProps {
  filter: FilterOption;
  setFilter: (value: FilterOption) => void;
  genres: { id: number; name: string }[];
  selectedGenre: number | null;
  setSelectedGenre: (id: number | null) => void;
  search: string;
  setSearch: (value: string) => void;
}

export default function Filters({
  filter,
  setFilter,
  genres,
  selectedGenre,
  setSelectedGenre,
  search,
  setSearch,
}: FiltersProps) {
  return (
    <div className="home-controls">
      <SearchInput value={search} onChange={setSearch} />

      <select
        className="home-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value as FilterOption)}
      >
        <option value="now_playing">Em Cartaz</option>
        <option value="popular">Mais Populares</option>
        <option value="top_rated">Melhores Avaliados</option>
        <option value="release_date">Mais Recentes</option>
        <option value="trending">🔥 Tendência Hoje</option>
      </select>

      <select
        className="home-select"
        value={selectedGenre ?? ''}
        onChange={(e) => setSelectedGenre(e.target.value ? Number(e.target.value) : null)}
      >
        <option value="">Todos os Gêneros</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
