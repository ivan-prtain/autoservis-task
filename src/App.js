import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import IndexContent from './components/IndexContent/IndexContent';
import KonfiguratorModal from './components/KonfiguratorModal/KonfiguratorModal';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import { useHistory } from 'react-router';

function App() {

  const [openModal, setOpenModal] = useState(false);

  const startConfigurator = () => {
    setOpenModal(true)
  }

  const closeConfigurator = () => {
    setOpenModal(false)
  }

  return (
    <Router>
      <div className='App'>
        <div className={openModal ? 'shaded' : 'wrapper'}>
          <Header cssTheme={openModal ? 'header-container gray-veil' : 'header-container'} />
          <IndexContent directStyle={openModal ? '0.4' : '1'} functionality={startConfigurator} />
          {openModal && <KonfiguratorModal functionality={closeConfigurator} />}
          <Footer />
          <Route path='/about' component={About} />
        </div>


      </div>
    </Router>
  );
}

export default App;
