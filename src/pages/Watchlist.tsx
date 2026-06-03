import { useWatchlist } from '../context/WatchlistContext'
import FilmList from '../components/FilmList'
import EmptyState from '../components/EmptyState'

export default function Watchlist() {
  const { watchlist } = useWatchlist()

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ver más tarde</h1>
      {watchlist.length === 0 ? (
        <EmptyState message="Tu lista está vacía" />
      ) : (
        <FilmList films={watchlist} />
      )}
    </div>
  )
}