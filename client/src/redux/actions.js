import { DETAIL_CARD, FILTER, ORDER, ALL_CARDS, CARD_BY_NAME } from "./types";
import axios from 'axios'

export const allVideogames = ()=>  async (dispatch) => {
   try{
     const response = await axios.get(`http://localhost:3001/videogames/`)
     dispatch({type: ALL_CARDS, payload: response.data}) 
  } catch(err){
    console.log(err)
  }
}

export const filterCard = (status) =>()=> {
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
     const response = await axios.get(`http://localhost:3001/videogames/${name}`)
     dispatch({type: CARD_BY_NAME, payload: response.data})
  } catch(err){
   console.log(err)
  }
}