// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const char = response.data;
//       const character = {
//         id: id,
//         name: char.name,
//         gender: char.gender,
//         species: char.species,
//         origin: char.origin.name,
//         image: char.image,
//         status: char.status,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(`Error: ${error.message}`);
//     });
// };

// module.exports = getCharById;

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req,res) => {

  const id = req.params.id;

  axios
    .get(`${URL}${id}`)
    .then((response) => {
            const char = response.data;
            const character = {
              id: id,
              name: char.name,
              gender: char.gender,
              species: char.species,
              origin: char.origin.name,
              image: char.image,
              status: char.status,
            }
          if (response) res.status(200).json(character)
          else res.status(404).json({ error: "Not found"})
          }
        ).catch((error) => {
            res.status(500).json({ error: error.message}) 
        })
}

module.exports = getCharById;