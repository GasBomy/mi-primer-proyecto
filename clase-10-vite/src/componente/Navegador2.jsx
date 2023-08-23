
import { Link } from 'react-router-dom';


const Navegador2 = () => {
    return(

        <nav>
            <ul>
                <li>
                    <link to='/Principal'> Principal </link >
                    
                </li>
                <li>
                    <a  href="https://utn.edu.ar/es/" 
                    target='_blank'
                    rel="noopener noreferrer">Main</a>
                </li>
                <li>
                    <a h href="https://utn.edu.ar/es/" 
                    target='_blank'
                    rel="noopener noreferrer">Servicios</a>
                </li>
            </ul>
        </nav>

    );
}

export default Navegador2;