import './App.css'
import NavbarComponent from '../src/components/NavBar/index.jsx'
import ItemListContainer from './containers/ItemListContainer'

const App = () => {
  
  return (
    <>
      <NavbarComponent />
      <ItemListContainer greeting={`ESTILO Y UTILIDAD EN 3 DIMENSIONES`}/>
    </>
  );
}

export default App;
