import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';
import './styles/main.css';
import './styles/lot.css';

function Market() {
    const [lot, setLot] = useState([]);
    useEffect(() => {
        axios.get('/wapi/getlot/', {
        }).then(response => {
            setLot(response.data)
        })
    }, [])
    return (
        <div className="home">
            <header>
                <NavBar />
                <UserBar />
            </header>
            <div className="wrapper">
                <h1 className='welcome'>Лента товаров</h1>
                <div className='lots'>
                    {lot.map( l => (
                        <div className="lot">
                            <div className='lotInfo'>
                                <img className="lotImage" src={l.image} alt='Фото товара' />
                                <div className="lotDesc">
                                    <span className='lotName'>{l.name}</span>
                                    <span className="lotCost">{l.cost} рб.</span>
                                </div>
                            </div>
                            <button className="buy">Купить</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      );
}

export default Market;
