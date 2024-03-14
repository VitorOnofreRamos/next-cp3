import Image from 'next/image';
import './styles.css'

const Header = () => {
    return(
        <>
        <header className='header'>
            <Image 
             className='img'
             src="/icon.png"
             alt="Youtube icon" 
             title="Youtube" 
             width="100" height="100"/>
            <p>Aqui vai o header</p>
        </header>
        </>
    );
}

export default Header;