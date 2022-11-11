import React from 'react';
import {Link} from 'react-router-dom';
import './error.css';


function Error(){
    return(
        <div className="not-found">
            <h1>ERROR 404</h1>
            <h2>Essa página não existe!</h2>
        <Link to="/"> Clique aqui e veja todos os filmes disponíveis.</Link>
        </div>
    )
}

export default Error;