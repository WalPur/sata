import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';

function home() {
    return (
        <div className="home">
            <header>
                <NavBar />
                <UserBar />
            </header>
            <h1>Welcome!</h1>
        </div>
      );
}

export default home;
