import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import FilmList from '../components/FilmList'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import EmptyState from '../components/EmptyState'
import { fetchFilms } from '../services/filmService'

export default function Home() {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    // TODO: Cargar películas con fetchFilms()
  }, [])

  const filteredFilms = films.filter((film: any) =>
    film.title.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} />

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <SearchBar onSearch={setSearch} />
      {filteredFilms.length === 0 ? (
        <EmptyState />
      ) : (
        <FilmList films={filteredFilms} />
      )}
    </div>
  )
}