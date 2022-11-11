import React from "react";
import{ useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import api from "../../services/api";
import './movie-info.css';


function Movie(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);


// Nota: Colocar depois as const em inglês. //


    useEffect(()=>{
        async function loadMovies(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "52c43ee20b41d87e742e5ccb664b1ef9",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('Filme não encontrado :( ');
            })
        }




        loadMovies();

        return()=> {
            console.log("Componente foi Desmontado");
        }
    }, [])



    if(loading){
        return(
            <div className="movie-info">
                <h1>Carregando o filme...</h1>
            </div>
        )
    }

// Colocar caso a nota seja menor que 6 em vermelho, e 6-7 amarelo e 8 ou >, verde.//

    return(
        <div className="movie-info">
            <h1>{filme.title}</h1>
            <img src ={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            
            <h3>SINOPSE</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className="buttons-area">
                <button>Salvar!</button>
                <button>
                    <a href="a">Trailer</a>
                </button>
            </div>
        </div>
    )
}



export default Movie;