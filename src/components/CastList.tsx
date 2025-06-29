type Props = {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
};

export default function CastList({ cast }: Props) {
  if (!cast || cast.length === 0) return null;

  return (
    <div className="detail-section">
      <strong className="block mb-2">👥 Elenco Principal:</strong>
      <ul className="cast-list">
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.name} como {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
}
