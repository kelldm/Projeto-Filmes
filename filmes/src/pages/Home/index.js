import React, { useState, useEffect } from "react";
import api from "../../services/api";
import {Link} from 'react-router-dom';
import './home.css';


function Home(){
    const [movies, setMovies] = useState([]);


    useEffect(()=> {

        async function loadMovies(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "52c43ee20b41d87e742e5ccb664b1ef9",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setMovies(response.data.results.slice(0, 10));
        }

        loadMovies();

    },[])


    return(
        <div className="container">
            <div className="movie-list">
                {movies.map((filme) =>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
