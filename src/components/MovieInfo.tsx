type Props = {
  movie: any;
};

export default function MovieInfo({ movie }: Props) {
  return (
    <>
      <h1 className="title-details">{movie.title}</h1>
      <p className="overview">{movie.overview}</p>
      <p className="detail-label">🎬 Lançamento: {movie.release_date}</p>
      <p className="detail-label">⭐ Avaliação: {movie.vote_average}</p>
      <div className="detail-section">
        <strong>🎭 Gêneros:</strong>
        <div className="genre-wrapper">
          {movie.genres.map((g: any) => (
            <span key={g.id} className="genre-badge">{g.name}</span>
          ))}
        </div>
      </div>
    </>
  );
}
