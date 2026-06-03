import { Link } from 'react-router-dom'

interface Film {
  id: string;
  title: string;
  image: string;
  director: string;
  release_date: string;
}

interface Props {
  film: Film;
}

export default function FilmCard({ film }: Props) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src={film.image} alt={film.title} className="w-full h-72 object-cover" />
      <div className="p-4">
        <Link to={`/film/${film.id}`} className="text-lg font-semibold hover:text-indigo-600">
          {film.title}
        </Link>
        <p className="text-sm">{film.director}</p>
        <p className="text-sm">{film.release_date}</p>
        {/* TODO: Botón de watchlist usando contexto */}
      </div>
    </div>
  )
}