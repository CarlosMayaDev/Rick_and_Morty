let myFavorites = [];

const postFav = (req,res) => {
    const favChar = req.body.character;
    myFavorites.push(favChar);

    res.json(myFavorites);
}

const deleteFav = (req,res) => {
    const id = req.params.id;
    //console.log("ID to delete:", id);
    myFavorites = myFavorites.filter((character) => character && character.id !== +id);
    // filter de esta manera no solo filtra todos los elementos que no coincidan con el 
    // id del elemento que queremos eliminar sino que exista, es decir que exista y que a la vez TENGA ID
    // asi no se tienen en cuenta elementos que existan pero que no tengan ID... suele pasar...

    res.json(myFavorites);
}

module.exports = { postFav, deleteFav };