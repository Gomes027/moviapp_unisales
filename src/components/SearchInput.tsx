interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Buscar filme..."
      className="home-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
