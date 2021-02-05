import './App.css'
import NavBarComponent from '../src/components/NavBar/NavBar.jsx'
import ItemListContainer from './containers/itemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer'

const App = () => {

  return (
    <>
      <NavBarComponent />
      <ItemListContainer greeting={`ESTILO Y UTILIDAD EN 3 DIMENSIONES`} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
