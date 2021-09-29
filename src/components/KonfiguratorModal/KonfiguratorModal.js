import React from 'react'
import Korak1 from '../Koraci/Korak1'
import Korak2 from '../Koraci/Korak2';
import './KonfiguratorModal.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { validate, saveCarManufacturer } from '../Koraci/Korak1Functions';


const KonfiguratorModal = ({ functionality }) => {

    const [korak1, setKorak1] = useState(true);
    const [korak2, setKorak2] = useState(false);

    const onClickKorak1 = () => {
        console.log('kliknuo sam');
        if (validate()) {
            console.log('mozete dalje')
            console.log(sessionStorage.getItem('carManufacturer'));
            setKorak1(false);
            setKorak2(true);
        }
        else {
            console.log('odlucio')
            console.log(sessionStorage.getItem('carManufacturer'));
            alert('Molim vas odaberite prvo proizvođača')
        }
    }


    return (
        <Router>
            <div className='modal-background'>
                <div className='modal-container'>
                    <button onClick={functionality}>X</button>
                    <h3>Konfigurator servisa</h3>
                    {korak1 && < Korak1 functionality={onClickKorak1} />}
                    {korak2 && < Korak2 />}
                </div>

            </div>
        </Router>
    )
}

export default KonfiguratorModal

