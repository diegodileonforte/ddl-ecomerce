import './App.css'
import NavBarComponent from '../src/components/NavBar/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer'

const App = () => {

  return (
    <>
      <NavBarComponent />
      <ItemListContainer greeting={`ESTILO Y UTILIDAD EN 3 DIMENSIONES`} />

    </>
  );
}

export default App;
