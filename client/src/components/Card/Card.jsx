import './card.css'
import {Link} from 'react-router-dom';

const Card = (props) => { 
    return (
        <div className="Card_Container">  
           <div className='Contenedor_Img'>
             <img src={props.image} alt="This is an image" className="img_card"/>   
            </div> 
           <div className='Contenedor_P'>
            <Link to={`/detail/${props.id}`}>
               <p className="p1">{props.name}</p> 
               <p className="p2">{props.genres}</p>
              <div className="Contenedor_rating">
               <p>🏆</p>
               <p className='p3'>{props.rating}</p>            
               </div> 
              </Link>   
            </div> 
        </div>
  )  
}

export default Card;