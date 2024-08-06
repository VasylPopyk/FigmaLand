import { useState } from 'react'
import logoImage from '../media/logo.png'
export default function Header(){
    let [menu, menuState] = useState('header_menu');
    let [burger, burgerState] = useState('header_burger');
    function burgerMenu(){
        if(menu === 'header_menu' && burger === 'header_burger'){
            menuState(menu = 'header_menu active')
            burgerState(burger = 'header_burger active')
        }else{
            menuState(menu = 'header_menu')
            burgerState(burger = 'header_burger')
        }
    }
    return(
        <header className='header'>
            <div className="header_container container">
                <a className='header_logo'>
                    <img src={logoImage} />
                </a>
                <nav className={menu}>
                    <div className='header_menu_item'>
                        <a href=''>Home</a>
                    </div>
                    <div className='header_menu_item'>
                        <a href=''>Product</a>
                    </div>
                    <div className='header_menu_item'>
                        <a href=''>About</a>
                    </div>
                    <div className='header_menu_item'>
                        <a href=''>Contact</a>
                    </div>
                </nav>
                <button className='header_login'>Login</button>
                <button className={burger} onClick={burgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}