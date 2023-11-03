import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import './App.css';
import Header from '../src/componentes/Header'
import Footer from '../src/componentes/Footer'
import OleosEssenciais from './componentes/OleosEssenciais';
import Vegetais from './componentes/Vegetais';
import Sinergias from './componentes/Sinergias';
import Naturais from './componentes/Naturais';
import Pessoal from './componentes/Pessoal';
import Aromas from './componentes/Aroma';
import Acessorios from './componentes/Acessorios';

function App() {
  return (
    <main>

      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<OleosEssenciais />} />
            <Route path="/Vegetais" element={<Vegetais />} />
            <Route path="/Sinergias" element={<Sinergias />} />
            <Route path="/Naturais" element={<Naturais />} />
            <Route path="/Pessoal" element={<Pessoal />} />
            <Route path="/Aromas" element={<Aromas />} />
            <Route path="/Acessorios" element={<Acessorios />} />

          </Routes>
        <Footer />
      </Router>

          
    </main>
    
  );
}

export default App;
