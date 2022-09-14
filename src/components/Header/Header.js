import React, { useEffect, useState } from "react";
import './Header.scss';
import {Link} from 'react-router-dom';
function Header(){
    const [locationPath, setLocationPath] = useState(window.location.pathname);
    const [isHome, setIsHome] = useState()
    useEffect(()=>{
        if(locationPath==='/'){
            setIsHome(true);
        }else{
            setIsHome(false);
        }
    }, [locationPath])
    return (
        <header className={isHome ? "home" : ""}>
            <div className="container">
                <div className="logo">
                    <a href='/'><img src="/logo-houzez-white.png" alt="logo" /></a>
                </div>
                <div className="headerNav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li className="toggleDropDown"><a href="#">Listing <i className='fa-solid fa-angle-down' style={{marginLeft: "5px"}}></i></a>
                        <ul className="dropdownMenu">
                            <li><a href="#">Appartment</a></li>
                            <li><a href="#">Office</a></li>
                            <li><a href="#">Studio</a></li>
                            <li><a href="#">Single Family Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Villa</a></li>
                        </ul>
                        </li>
                        <li><a href="/about">About us</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="profileContainer">
                    <i className="fa-solid fa-user"></i>
                    <button>Create a listing</button>
                </div>
            </div>
        </header>
    );
}

export default Header;