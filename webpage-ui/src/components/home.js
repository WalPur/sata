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
                <p className="welcomeText">
                Наш проект SATA с удобным интерфейсом для общения, а также с функцией продажи хэнд мейда. Проект помогает пожилым людям, которые хотят проводить время с пользой и быть самозанятыми. Он решает проблему  самореализации и трудоустройства и помогает выйти на дополнительный доход с помощью нашей платформы.
                </p>
            </div>
        </div>
      );
}

export default home;
