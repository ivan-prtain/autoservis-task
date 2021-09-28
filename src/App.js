import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import IndexContent from './components/IndexContent/IndexContent';
import KonfiguratorModal from './components/KonfiguratorModal/KonfiguratorModal';
import { useState } from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false);

  const startConfigurator = () => {
    setOpenModal(true)
  }

  const closeConfigurator = () => {
    setOpenModal(false)
  }

  return (
    <div className='App'>
      <div className={openModal ? 'shaded' : 'wrapper'}>
        <Header cssTheme={openModal ? 'header-container shaded' : 'header-container'} />
        <IndexContent functionality={startConfigurator} />
        {openModal && <KonfiguratorModal functionality={closeConfigurator} />}
      </div>


    </div>
  );
}

export default App;
