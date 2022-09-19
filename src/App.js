import Navbar from './components/NavBar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
 <>
<Router>
      <Navbar>
      </Navbar>
<Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route path="/:cat" element={<ItemListContainer/>}/>
      <Route path="Item/:id" element ={<ItemDetailContainer/>}/>
      
</Routes>
      <Counter init={0} stock={10}>
      </Counter>
</Router>
      </>
  );
}

export default App;
