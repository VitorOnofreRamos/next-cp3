import CardFilm from "../Components/CardFilm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-auto">
      <CardFilm 
       title="Matrix"
       imageUrl="/Matrix.jpg"
       videoUrl="https://www.youtube.com/watch?v=TPxQqWp7kTA"
      />
    </main>
  );
}
