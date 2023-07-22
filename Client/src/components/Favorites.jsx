import { useSelector } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Favorites.module.css"

const Favorites = () => {

  const [aux, setAux] = useState(false);

  const favorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  useEffect(() => {
    setAux(false); // Reiniciar el estado aux a false cuando se actualice el estado de favoritos
  }, [favorites]);

  return (
    <div className={style.div}>

<div>
<h3 className={style.h3}>Organiza tus tarjetas favoritas!</h3>
    <select name="" id="" onChange={handleOrder} className={style.select} >
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
    </select>

    <select name="" id="" onChange={handleFilter} className={style.select} >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">Unknown</option>
      <option value="allCharacters">Todos los favoritos</option>
    </select>
</div>

    {favorites.map( (fav) => {
      return (     
      <Card 
      id={fav.id} 
      name={fav.name}
      status={fav.status}
      species={fav.species}
      gender={fav.gender}
      origin={fav.origin}
      image={fav.image}
      />  
      )
    })}
    </div>
  )
}

export default Favorites;