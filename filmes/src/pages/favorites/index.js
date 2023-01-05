import React, { useEffect, useState } from "react";
import './favorites.css'
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';

function Favorites(){

    const [filmes, setFilmes]= useState([])

    useEffect (()=>{
        const myList = localStorage.getItem("@mymovies");
        setFilmes(JSON.parse(myList)|| [])
    },[])


function excluirFilme(id){
    let filtroFilmes = filmes.filter( (item)=> {
        return ( item.id !== id)
    })
    
setFilmes(filtroFilmes);
localStorage.setItem("@mymovies", JSON.stringify(filtroFilmes))
toast.success("Filme removido com sucesso!")

}


    return(
        <div className="my-movies">
            <h1>Meus filmes</h1>

        {filmes.length === 0 && <span> Você não possui nenhum filme salvo :( </span> }

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link> 
                                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites; 