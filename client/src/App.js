import { Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Form } from './views'
import NavBar from './components/NavBar/NavBar';
import './app.css'

function App() {
  const location = useLocation();
  return (
    <div className='App_Container'>
        {location.pathname !== '/' && <NavBar />}
        <Route exact path='/' render={() => (<Landing/>)} />
        <Route path='/home' render={() => (<Home/>)} />
        <Route path='/detail/:id' render={() => (<Detail/>)} />
        <Route path='/create' render={() => (<Form/>)} />
    </div>
  );
}

export default App;
