import style from './Card.module.css';
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {



const [isFav, setIsFav] = useState(false);


const handleFavorite = () => {
   if (isFav) {
      setIsFav(false);
      removeFav(id);
   } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose });
   }
};

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={style.div}>
         {
         isFav ? (
          <button onClick={handleFavorite}>❤️</button>
             ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
      }
         <button className={style.button} onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={style.h2}>Name: {name}</h2>
         </Link>
         <h2 className={style.h2}>Status: {status}</h2>
         <h2 className={style.h2}>Species: {species}</h2>
         <h2 className={style.h2}>Gender: {gender}</h2>
         <h2 className={style.h2}>Origin: {origin}</h2>
         <img className={style.img} src={image} alt='' />
      </div>
   );

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
