import { Link } from 'react-router-dom';
import logo from '../assets/logo-car.png';

const Logo = () => {
    return (
        <Link to={'/'}>
            <img src={logo} width={100} alt="rentalku-logo" />
        </Link>
    )
}

export default Logo;