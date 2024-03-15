import CardFilm from "../Components/CardFilm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-around">
       <CardFilm 
       title="Matrix"
       image="/Matrix.jpg"
       video="https://www.youtube.com/watch?v=TPxQqWp7kTA"
      />
       <CardFilm 
       title="Matrix Reloaded"
       image="/MatrixReloaded.jpg"
       video="https://www.youtube.com/watch?v=kYzz0FSgpSU"
      />
       <CardFilm 
       title="Matrix Revolutions"
       image="/MatrixRevolutions.jpg"
       video="https://www.youtube.com/watch?v=hMbexEPAOQI"
      />
       <CardFilm 
       title="Matrix Resurrections"
       image="/MatrixResurrections.jpg"
       video="https://www.youtube.com/watch?v=NDizFsSsX18"
      />
       <CardFilm 
       title="Jurassi Park"
       image="/JurassicPark.jpg"
       video="https://www.youtube.com/watch?v=fLDR-YYK7jQ"
      />
       <CardFilm 
       title="O Mundo Perdido - Jurassic Park"
       image="/JurassicPark2.jpg"
       video="https://www.youtube.com/watch?v=9alwAnjZJ9E"
      />
       <CardFilm 
       title="Jurassic Park 3"
       image="/JurassicPark3.jpg"
       video="https://www.youtube.com/watch?v=gjIaV6CU0wA"
      />
       <CardFilm 
       title="Jurassic World"
       image="/JurassicWorld.jpg"
       video="https://www.youtube.com/watch?v=RFinNxS5KN4"
      />
       <CardFilm 
       title="Jurassic World: Reino Ameaçado"
       image="/JurassicWorld2.jpg"
       video="https://www.youtube.com/watch?v=u2WuN96DSkY"
      />
       <CardFilm 
       title="Jurassic World: Domínio"
       image="/JurassicWorld3.jpg"
       video="https://www.youtube.com/watch?v=hcv_8WXSetM"
      />
       <CardFilm 
       title="O Exterminador do Futuro"
       image="/Terminator.jpg"
       video="https://www.youtube.com/watch?v=s1-kHVwOGyA"
      />
       <CardFilm 
       title="O Exterminador do Futuro 2"
       image="/Terminator2.jpg"
       video="https://www.youtube.com/watch?v=0yfpLhW-Xyg"
      />
    </main>
  );
}
