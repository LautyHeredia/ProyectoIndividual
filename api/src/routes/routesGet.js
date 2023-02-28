const { Router } = require("express")
const {getAllInfo, getVideogamesById} = require("../Controllers/controllers")
const { Genres, Platform, Videogame } = require("../db")

const videogameRoutesGet = Router();


videogameRoutesGet.get("/", async (req, res) => {
  let { name } = req.query; 

    try {
      let total = await getAllInfo();
      if(name){
        let found = total.filter(
         f => f.name.toLowerCase().includes(name.toLowerCase())
        ) 

        found.length ? 
        res.status(200).send(found) : 
        res.status(400).send('Game not found ..')
      }else{
        res.status(200).send(total.flat())

      }

      } catch (errors) {
      res.status(400).json({err: errors.message})  
    }
})

videogameRoutesGet.get("/:id", async (req, res) => {
  
  const {id} = req.params;

   try {
    const result = await getVideogamesById(id);
    result ? res.status(200).send(result) : res.status(400).send('Game not found..')
   } catch (errors) {
    res.status(400).json({err: errors.message})
   } 
})

videogameRoutesGet.post("/post", async (req, res) => {

   try {
   let {name, description, platform,released, rating, image, genres} = req.body;

    if(!image){
      try{
        image = 'https://static.vecteezy.com/system/resources/previews/003/561/078/large_2x/silhouette_of_mysterious-man-free-photo.jpg'
      }catch(err){
        console.log(err)
      }
    }

      const createVideogames = await Videogame.create({
         name: name,
         description: description,
         released: released,
         rating: rating,
         image: image,
       })   
 
      genres.forEach(async e => {
       const found = await Genres.findAll({
         where: {name: e}
       })
       createVideogames.addGenres(found)
      })
       
      platform.forEach(async element => {
       const found = await Platform.findAll({
         where: {name: element}
       })
       createVideogames.addPlatform(found)
      })  
    res.status(201).send(createVideogames) 
 }catch(err){
  res.status(400).json({error: err.message})
 }
})
 

module.exports = videogameRoutesGet;