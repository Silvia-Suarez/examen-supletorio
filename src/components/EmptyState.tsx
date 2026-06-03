interface Props {
    message?: string;
  }
  
  export default function EmptyState({ message = 'No se encontraron resultados' }: Props) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="">{message}</p>
      </div>
    )
  }