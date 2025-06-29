type Props = {
  trailer: {
    key: string;
  } | null;
};

export default function Trailer({ trailer }: Props) {
  if (!trailer) return null;

  return (
    <div className="trailer-container mt-6">
      <h2 className="text-xl font-semibold mb-2">🎞️ Trailer</h2>
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Trailer do Filme"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
