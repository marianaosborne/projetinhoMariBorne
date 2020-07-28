import React from 'react';
import Logo from '../../assets/img/LogoW.png';
import './Menu.css';
import Button from '../Button';



function Menu(){

    return(
        <nav className="Menu"> 
        <a href="/">
            <img className="Logo" src={Logo} alt="Mari logo" />
        </a>    
        
        <Button as="a" className="Button" href="/">
            Adicione uma Nova Loucura
        </Button>
        </nav>
    )

}

export default Menu;