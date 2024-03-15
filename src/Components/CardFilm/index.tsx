import CardFilmProps from './interface';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css'

const CardFilm: React.FC<CardFilmProps> = ({ title, image, video }) => {
    return (
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <div className="card-content">
            <Image 
             className="card-image"
             src= {image}
             width={200}
             height={200}
             alt={"Poster do filme "+title}
            /> 
        </div>
        <Link href={video} target="_blank" rel="noopener noreferrer" className="card-link">Assistir</Link>
      </div>
    );
  };

export default CardFilm;