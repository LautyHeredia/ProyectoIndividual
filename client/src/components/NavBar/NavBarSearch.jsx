import './navBarSearch.css'
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux'
import { cardByName } from "../../redux/actions"

const NavBarSearch = () => {

    const dispatch = useDispatch()
    const [ nameVD, setNameVd ] = useState([])

    const butonName = (evento) => {
      setNameVd(evento.target.value)  
    }

     useEffect(() => {
       dispatch(cardByName(nameVD))
       setNameVd(nameVD)
    }, [nameVD])

    const handleSubmit = (evento) => {
       evento.preventDefault();
       
       if(Object.keys(nameVD).length){
        evento.target.reset()
       }
    }

    return (
        <div className="Container_Search">
            <form className='Container_Form' onSubmit={handleSubmit}>
                <input type='search' placeholder='Input name hear..' onChange={butonName} />
            </form>
        </div>
    )
} 

export default NavBarSearch;