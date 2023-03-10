import './navBarSearch.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { cardByName } from "../../redux/actions"

const NavBarSearch = ({setCurrentPage}) => {

    const dispatch = useDispatch()
    const [ nameVD, setNameVd ] = useState('')

    useEffect(() => {
        dispatch(cardByName(nameVD))
    }, [dispatch])
    
    const handleInputChange = (e) => {
        e.preventDefault()
        setNameVd(e.target.value)
    }
    
    const handleClick = (e) => {
      e.preventDefault()
      dispatch(cardByName(nameVD))
      nameVD.length && setCurrentPage(0) 
    }
    return (
        <div className='Container_NavSearch'>
                <input type='text' placeholder='Input name for search..' onChange={e => handleInputChange(e)} />
                <button type='submit' onClick={e => handleClick(e)}>🔎</button>
        </div>
    )
} 

export default NavBarSearch;