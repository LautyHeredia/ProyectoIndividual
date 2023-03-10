import { DETAIL_CARD, FILTER, ORDER, ALL_CARDS, CARD_BY_NAME , GET_GENRES, FILTER_BY_GENRE ,POST_VIDEOGAME, GET_PLATFORMS} from "./types";
import axios from 'axios'

export const allVideogames = ()=>  async (dispatch) => {
   try{
     const response = await axios.get(`http://localhost:3001/videogames/`)
     dispatch({type: ALL_CARDS, payload: response.data}) 
  } catch(err){
    console.log(err)
  }
}

export const filterCard = (status) => {
      return{
         type: FILTER,
         payload: status
      }
}

export const orderCards = (id) =>  {
  return {
    type: ORDER,
    payload: id
  }      
}

export const detailCard = (id)=> async (dispatch) => {  
   try{
      const response = await axios.get(`http://localhost:3001/videogames/${id}`)
      dispatch({type: DETAIL_CARD, payload: response.data})
   }catch(err){
      console.log(err)
   }
}

export const cardByName =(name) =>  async (dispatch) => {
  try{
     const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
    return dispatch({type: CARD_BY_NAME, payload: response.data})
  } catch(err){
   console.log(err)
  }
}

export const postVideogame = (payload) => {
  return async (dispatch) => {
     try {
        // console.log(payload)
        const json = await axios.post(`http://localhost:3001/videogames`, payload)
        // console.log(json.data)
        return dispatch({
           type: POST_VIDEOGAME,
           payload: json.data
        })
     } catch(err) {
        console.log(err)
     }
  }
}

export const getGenres = () => {
 
  return async(dispatch) => {

      let json = await axios.get('http://localhost:3001/genres?')
      console.log(json.data)
      return dispatch({
          type: GET_GENRES,
          payload: json.data
      })
  }
}

export const filterByGenre = (payload) => {
  return {
      type: FILTER_BY_GENRE,
      payload: payload
  }
}


export const getPlatforms = () => {

  return async(dispatch) => {
      let json = await axios.get('http://localhost:3001/platforms?')
      return dispatch({
          type: GET_PLATFORMS,
          payload: json.data
      })
  }
}