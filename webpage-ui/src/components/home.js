import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';
import './styles/main.css'

function home() {
    return (
        <div className="home">
            <header>
                <NavBar />
                <UserBar />
            </header>
            <div className="wrapper">
                <h1 className='welcome'>Добро пожаловать!</h1>
            </div>
        </div>
      );
}

export default home;
