import { FILTER, ORDER, ALL_CARDS, DETAIL_CARD, CARD_BY_NAME,  } from './types';

const initialState = {
 myCards: [],
 myCardsCopy: [],
 mySearchCopy: {},
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

    case DETAIL_CARD: return {
      ...state,
      myDetail: actions.payload
    }

    case FILTER: {
      const copOrder = [...state.myCardsCopy];
      let filtered;
      if (actions.payload === "ApiVideoGames") {
        filtered = copOrder.filter((e) => e.source === actions.payload);
      } else if (actions.payload === "DbVideoGames") {
        filtered = copOrder.filter((e) => e.genres.includes(actions.payload));
      } else {
        console.warn("Unknown filter type:", actions.payload);
        return { ...state };
      }
      return {
        ...state,
        myCards: filtered
      };
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
      const copySearch = [...state.mySearchCopy]
      const search = copySearch.filter((e) => e.name === actions.payload)

      return {
        ...state,
        myCards: search
      }
    }
    
    default: return{ 
        ...state 
    }
   } 
}

export default reducer;