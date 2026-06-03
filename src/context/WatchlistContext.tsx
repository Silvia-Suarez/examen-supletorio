import { createContext, useContext, useState, type ReactNode } from 'react'

interface Film {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  image: string;
}

interface WatchlistContextType {
  watchlist: Film[];
  addToWatchlist: (film: Film) => void;
  removeFromWatchlist: (filmId: string) => void;
  isInWatchlist: (filmId: string) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined)

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<Film[]>([])

  // TODO: Implementar la lógica de cada función

  const value: WatchlistContextType = {
    watchlist,
    addToWatchlist: () => {},
    removeFromWatchlist: () => {},
    isInWatchlist: () => false,
  }

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  )
}

export function useWatchlist() {
  const context = useContext(WatchlistContext)
  if (!context) {
    throw new Error('useWatchlist debe usarse dentro de WatchlistProvider')
  }
  return context
}