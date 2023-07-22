import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     const { name, status, species, gender, origin, image } = character;

     return (
       <div>
         <h1>{name}</h1>
         <img src={image} alt={name} />
         {status && <p>Status: {status}</p>}
         {species && <p>Species: {species}</p>}
         {gender && <p>Gender: {gender}</p>}
         {origin && origin.name && <p>Origin: {origin.name}</p>}
       </div>
     );
}

export default Detail;