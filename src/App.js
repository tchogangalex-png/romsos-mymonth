import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
 import Acceuil from './composent/acceuil/index1';
 import Contact from './composent/contact/index2';
 import Devis from './composent/devis/index3';
 import Premium from './composent/premium/index4';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Acceuil />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/devis'} element={<Devis />} />
          <Route path={'/premium'} element={<Premium />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
