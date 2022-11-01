import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Movie from './pages/Filme';
import Header from './components/Header';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
             <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filmes/:id" element={ <Movie/> }/>
               
            </Routes>
            
        </BrowserRouter>
    )
}

export default RoutesApp;
