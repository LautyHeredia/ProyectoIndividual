const { Router } = require("express")
const router = Router();
const { Platform } = require("../db")
const axios = require("axios")

router.get("/", async (_req, res) => {
    const apiPlatform = (await axios.get('https://api.rawg.io/api/games?https://api.rawg.io/api/games?key=82040f036891417ead73a2a9ce8edf2e')).data.results

    try{
        let platforms = apiPlatform.map(p => p.platforms ? p.platforms : 'no data')
        let platform = platforms.flat().map(p => p.platform ? p.platform.name : 'no data')

        platform.forEach(e => {
           if(e){
            Platform.findOrCreate({
                where : {name: e}
            })
           } 
        });

        platform = await Platform.findAll()
        res.status(200).send(platform)
    }catch(err){
        res.status(400).send({error: err.message})
    }
})

module.exports = router;