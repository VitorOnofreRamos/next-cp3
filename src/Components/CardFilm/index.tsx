import CardFilmProps from './interface';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css'

const CardFilm = (props: CardFilmProps) => {
    return(
        <>
        <div className="cardFilm">
            <p className="titulo">
                {props.title}
            </p>
            <Image
             className="banner"
             src={props.imageUrl}
             alt={props.title}
             title={props.title}
             width="100" height="100"/>
            <Link href={props.title}/>
        </div>
        </>
    );
}

export default CardFilm;