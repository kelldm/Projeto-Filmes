import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Movie from './pages/Filme';
import Header from './components/Header';
import Error from './pages/error';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
             <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filme/:id" element={ <Movie/> }/>

                <Route path='*' element={<Error/>} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default RoutesApp;
