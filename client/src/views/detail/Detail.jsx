import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailCard } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { Loading } from '../../components/loading/Loading';
import './detail.css'

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
       <div className='Contenedor_DeDetalles'>
        <h1>Description Card:</h1>
         <h2>Name: {stateDetail.name}</h2>  
           <img src={stateDetail.image} alt='-' className='Img_Container'/>   
           <p>Genres: {stateDetail.genres?.map((e) => e.slug + " ")}</p>
           <p>Rating: {stateDetail.rating}</p>
           <p>Released: {stateDetail.released}</p>
           <p>Platform: {stateDetail.platforms?.map((e) => e.platform.slug + " ")}</p>
         </div>  
         <div className='Contenedor_Description'>
           <p>Description: {stateDetail.description}</p>
         </div>
    </div> 
  );
}

export default Detail;