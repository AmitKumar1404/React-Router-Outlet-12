import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Layout from './Pages/Layout';
import NotFound from './Pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="login" element={ <Login /> }></Route>
                <Route path="register" element={ <Register /> }></Route>
                <Route path='*' element={ <NotFound /> }></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
