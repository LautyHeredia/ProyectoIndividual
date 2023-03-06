import './landing.css'
import { Link } from "react-router-dom"
import video from '../../videoLanding/videoLanding.mp4'

const Landing = () => {
    return (
       <div className='ContenedorLanding'>
          <div className='Contenedor_Video'>
            <video loop autoPlay muted className='video'>
              <source src={video} type='video/mp4' className='video'></source>
            </video> 
          </div>
            <h1>VideoGames</h1>
            <Link to={'/home'}>Explore</Link>
        </div> 
    )
}

export default Landing;