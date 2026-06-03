interface Props {
    message: string;
  }
  
  export default function ErrorMessage({ message }: Props) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-red-600">{message}</p>
      </div>
    )
  }