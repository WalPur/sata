import { Link } from 'react-router-dom';
import Logo from './IMG/Main.PNG';
import Lessons from './IMG/Lessons.PNG';
import Chat from './IMG/Chat.PNG';
import Market from './IMG/Market Place.PNG';
import './styles/navbar.css';

function NavBar() {
    return (
        <nav>
            <Link to={{ pathname: `/`, fromDashBoard: false }} className="navElement">
                <img className="NavIcon Logo" src={Logo} alt='Главная страница' title="На главную" />
            </Link>
            <Link to={{ pathname: `/lessons`, fromDashBoard: false }} className="navElement">
                <img className="NavIcon Icon" src={Lessons} alt='Мастер классы' title="Мастер класы" />
            </Link>
            <Link to={{ pathname: `/chat`, fromDashBoard: false }} className="navElement">
                <img className="NavIcon Icon" src={Chat} alt='Чат' title="Чат" />
            </Link>
            <Link to={{ pathname: `/market`, fromDashBoard: false }} className="navElement">
                <img className="NavIcon Icon" src={Market} alt='' title="" />
            </Link>
        </nav>
    )
}

export default NavBar