import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import FilmDetail from './pages/FilmDetail'
import Watchlist from './pages/Watchlist'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow p-4 flex gap-6 justify-center">
        <Link to="/" className="hover:text-indigo-600 font-medium">Catálogo</Link>
        <Link to="/watchlist" className="hover:text-indigo-600 font-medium">Ver más tarde</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<FilmDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  )
}