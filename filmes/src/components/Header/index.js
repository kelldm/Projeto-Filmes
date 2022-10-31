import React from 'react';
import './header.css';
import {Link}  from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Filmaplix!</Link>
            <Link className='favorites' to='favorites'>Meus filmes</Link>
        </header>

    )
}

export default Header;