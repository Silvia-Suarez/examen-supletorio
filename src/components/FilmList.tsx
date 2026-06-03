import FilmCard from './FilmCard'

interface Film {
  id: string;
  title: string;
  image: string;
  director: string;
  release_date: string;
}

interface Props {
  films: Film[];
}

export default function FilmList({ films }: Props) {
  return (
    <div className="">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  )
}