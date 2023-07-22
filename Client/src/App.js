import './App.css';
//import characters from './data.js';import './App.css';
import Cards from './components/Cards.jsx';
import axios from 'axios';
import Nav from './components/Nav';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import Favorites from './components/Favorites'

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   // const EMAIL = "charles123@gmail.com";
   // const PASSWORD = "charles123";

   // const login = (userData) => {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   const logOut = () => {
      setAccess(false);
      navigate('/');
    };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const location = useLocation();

   // Verificar si la ruta actual es "/"
   const isHomePage = location.pathname === "/";

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name && !characters.find(char => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== id))
   }

   return (
      <div class="div">
         {isHomePage ? null : <Nav onSearch={onSearch} logOut={logOut}/> }
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/*" element={<Error />} />
         </Routes>
         <h3 class="container">Busca tus tarjetas de Rick and Morty!</h3>
      </div>
   );
}

export default App;
