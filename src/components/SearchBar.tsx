import { useState } from 'react'

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="relative mb-6">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Buscar película..."
        className=""
      />
      {/* TODO: Agregar ícono de lupa con Font Awesome o react icons*/}
    </div>
  )
}