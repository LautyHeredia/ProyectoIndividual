import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './cardsContainer.css'
import { Loading } from '../loading/Loading';
import {useSelector, useDispatch} from 'react-redux'
import { allVideogames, getGenres} from '../../redux/actions';
import { orderCards } from '../../redux/actions';
import { filterCard,filterByGenre } from '../../redux/actions';
import NavBarSearch from '../NavBar/NavBarSearch';

const CardsContainer = () => {
  // const [videogames, setVideogames] = useState([]);
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch()
  const myCards = useSelector(state => state.myCards)
  const myGenres = useSelector(state => state.genres)
  
  useEffect(() => {
    dispatch(allVideogames()).finally(() => setLoading(false))
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  const filteredVideogames = () => {
    return myCards.slice(currentPage, currentPage + 15);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 15)
  }

   const prevPage = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 15)
    }
  }

  if(loading){
    return <Loading/>
  }

  const handleClick = (evento) => { 
      dispatch(orderCards(evento.target.value))
  }

  const filterClick = (evento) => {
     dispatch(filterCard(evento.target.value))
  }

  const filterGenres = (evento) => {
    dispatch(filterByGenre(evento.target.value))
  }


  return (
    <div className="Container_Cards">
      <div className='Container_Navv'>
        <NavBarSearch setCurrentPage={setCurrentPage} className='navBar'/>
      </div> 
    <div className='Container_FilteredVideogames'>
       <h1>Ordenar por:</h1>
      <select className='Select_Container_Button' onChange={handleClick}>
         <option value={'Ascendente'}>Ascendente</option>
         <option value={'Descendente'}>Descendente</option>
        <option value={'A-Z'}>A-Z</option>
        <option value={'Rating'}>Rating</option>
      </select>
      <select className='Select_Container_Button2' onChange={filterClick}>
        <option value={'ApiVideogames'}>Api VideoGames</option>
        <option value={'DbVideogames'}>DB VideoGames</option>
      </select>
      <select className='select' onChange={filterGenres}>
        <option>Filter By Genres</option>
                  <option value="All">All</option>
               {
                 myGenres.map(g => (
                   <option key={g.id} value={g.name}>{g.name}</option>
                   ))
                  }
     </select>
    </div>
      {filteredVideogames().map((videogame) => (
        <div className="Card_Props_Container" key={videogame.id}>
          <Card
            id={videogame.id}
            name={videogame.name}
            image={videogame.image}
            rating={videogame.rating}
            genres={videogame.genres.map(e => e.name + " ")}
          />
        </div>
      ))}
      <div className='Conteiner_Next_Prev'>
        <button className='NextPage' onClick={nextPage}>NextPage</button>
        <button className='PrevPage' onClick={prevPage}>PrevPage</button> 
      </div>
    </div>
  );
};

export default CardsContainer;