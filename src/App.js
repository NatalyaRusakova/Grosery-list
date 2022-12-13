
import './App.css';
import imgShop from './shopping.jpg';
import imgMan from './man.jpg';
import { GroseryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
      <img src={ imgShop } alt="shop" width="200px"/>
      </div>
      <div className="container">
      <h1>Grosery List</h1>
      </div>
      <GroseryList/>
      <div className="container">
      <img src={ imgMan } alt="man" width="200px"/>
      </div>
    </div>
  );
}

export default App;
