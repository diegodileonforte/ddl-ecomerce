import './App.css'
import NavBarComponent from '../src/components/NavBar/NavBar.jsx'
import ItemListContainer from './containers/itemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CartComponent from './components/Cart/Cart'


const App = () => {

  return (

    <BrowserRouter>
      <NavBarComponent />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer greeting={`ESTILO Y UTILIDAD EN 3 DIMENSIONES`} />
        </Route>
        <Route path='/category/:categoryId'>
          <ItemListContainer greeting={`ESTILO Y UTILIDAD EN 3 DIMENSIONES`} />
        </Route>
        <Route path='/item/:id'>
          <ItemDetailContainer />
        </Route>
        <Route path='/cart'>
          <CartComponent />
        </Route>
        <Route path='*' children={<div>Not found</div>} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
