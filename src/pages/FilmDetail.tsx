import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchFilmById } from '../services/filmService'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default function FilmDetail() {
  const { id } = useParams<{ id: string }>()
  const [film, setFilm] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // TODO: Cargar detalle con fetchFilmById(id)
  }, [id])

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} />
  if (!film) return null

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Link to="/" className="text-indigo-600 hover:underline mb-4 block">← Volver</Link>
      <img src={film.image} alt={film.title} className="w-full max-w-md mx-auto rounded-xl shadow" />
      <h1 className="text-3xl font-bold mt-6">{film.title}</h1>
      <p className="text-gray-500 italic">{film.original_title}</p>
      <p className="mt-2"><strong>Año:</strong> {film.release_date}</p>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Duración:</strong> {film.running_time} min</p>
      <p className="mt-4">{film.description}</p>
      {/* TODO: Botón de watchlist */}
    </div>
  )
}