import style from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar({ onSearch }) {

const [id, setId] = useState("");

const handleChange = (event) => {
   setId(event.target.value);
}


   return (
   <div>
      <div className={style.div}>
         <input 
         type='search' 
         onChange={handleChange} 
         className={style.input}
         value={id}
         />
         <button className={style.button} onClick={() => {
            onSearch(id);
         }}>Agregar</button> 
   </div>
   </div>
   );
}

export default SearchBar;
