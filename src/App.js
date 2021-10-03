import './App.css';
import Header from './components/Header/Header';
import IndexContent from './components/IndexContent/IndexContent';
import ConfiguratorModal from './components/ConfiguratorModal/ConfiguratorModal';
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
        <Header cssTheme={openModal ? 'header-container gray-veil' : 'header-container'} />
        <IndexContent directStyle={openModal ? '0.4' : '1'} functionality={startConfigurator} />
        {openModal && <ConfiguratorModal functionality={closeConfigurator} />}
      </div>


    </div>
  );
}

export default App;
