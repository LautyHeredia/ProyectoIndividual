import { FILTER, ORDER, ALL_CARDS, FILTER_BY_GENRE , DETAIL_CARD, CARD_BY_NAME,  GET_GENRES, GET_PLATFORMS, POST_VIDEOGAME} from './types';

const initialState = {
 myCards: [],
 myCardsCopy: [],
 mySearchCopy: [],
 genres: [],
 platforms: [],
 myDetail: {}
}


const reducer = (state = initialState, actions) => {
   switch (actions.type) {
    case ALL_CARDS: return{
       ...state,
       myCards: actions.payload,
       myCardsCopy: actions.payload,
       mySearchCopy: actions.payload
    }

    case GET_GENRES:
         return {
            ...state,
            genres: actions.payload
         }

         case FILTER_BY_GENRE: {
            const allVideogames = [...state.myCardsCopy]
            let filtered;
            
            if(actions.payload === "All"){
              filtered = allVideogames;
             return{
              ...state,
              myCards: filtered
             } 
            }else{
             filtered = allVideogames.filter((e) =>e.genres.some((e) => e.name === actions.payload))
             return{
              ...state,
              myCards: filtered
             }
            }
          }

         case GET_PLATFORMS:
          return {
             ...state,
             platforms: actions.payload
          }     

       case POST_VIDEOGAME:
          return {
             ...state
          }     

    case DETAIL_CARD: return {
      ...state,
      myDetail: actions.payload
    }

    case FILTER: {
      const copOrder = [...state.myCardsCopy];
      let filtered;
      if (actions.payload === "ApiVideogames") {
        filtered = copOrder.filter((e) => Number.isInteger(e.id));
        return {
          ...state,
          myCards: filtered
        };
      } else if (actions.payload === "DbVideogames") {
        filtered = copOrder.filter((e) => !Number.isInteger(e.id))       
          return {
            ...state,
            myCards: filtered
          };
      }else{
        return {...state};
      }
    }

    case ORDER: {
      const copyOrder = [...state.myCardsCopy]
      if(actions.payload === "Descendente")  {
        const order = copyOrder.sort((a, b) => {
          if (a.id > b.id) {
            return -1
          }else if(b.id > a.id){
            return 1  
          }else return 0
         })
         return {
           ...state,
           myCards: order
         }
        } else if(actions.payload === "Ascendente") {
          const order = copyOrder.sort((a, b) => {
            if (a.id > b.id) {
              return 1
            }else if(b.id > a.id){
              return -1  
            }else return 0
           })
           return {
             ...state,
             myCards: order
           }
        }else if(actions.payload === "A-Z"){
         const order = copyOrder.sort((a, b) => {
            if(a.name[0] > b.name[0]){
               return 1
            }else if(b.name[0] > a.name[0]){
               return -1
            }else return 0
         })
         return {
            ...state,
            myCards: order
         }
        }else if(actions.payload === "Rating"){
         const order = copyOrder.sort((a,b) => {
            if(a.rating > b.rating){
               return 1;
            }else if(b.rating > a.rating){
               return -1;
            }else{
               return 0;
            }
         })
         return {
            ...state,
            myCards: order
         }
        }
    }

    case CARD_BY_NAME: {

      return {
        ...state,
        myCards: actions.payload
      }
    }
    
    default: return{ 
        ...state 
    }
   } 
}

export default reducer;