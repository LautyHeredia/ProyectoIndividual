import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailCard } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { Loading } from '../../components/loading/Loading';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const stateDetail = useSelector(state => state.myDetail);
  
  console.log(stateDetail)

  useEffect(() => {   
        dispatch(detailCard(id));
        setLoading(false);   
  }, [id, dispatch]);

  if (stateDetail.length === 0 || loading) {
    return <Loading/>;
  }

  return (
    <div className='Contenedor_Detail'> 
      <h1>Description Card:</h1>
      <ul className='Contenedor_Ul'>         
        <li>Name: {stateDetail.name}</li>
        <li>Description: {stateDetail.description}</li>
        {/* <li>Genres: {stateDetail.genres.map((e) => e.name + " ")}</li> */}
        <li>Rating: {stateDetail.rating}</li>
        <li>Released: {stateDetail.released}</li>
        {/* <li>Platform: {stateDetail.platforms.map((e) => e.name + " ")}</li> */}
        <img src={stateDetail.image} alt='-'/>     
      </ul>
    </div> 
  );
}

export default Detail;