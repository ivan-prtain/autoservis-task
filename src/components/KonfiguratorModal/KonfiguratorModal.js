import React from 'react'
import Korak1 from '../Koraci/Korak1'
import Korak2 from '../Koraci/Korak2';
import './KonfiguratorModal.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { validate, saveCarManufacturer } from '../Koraci/Korak1Functions';
import Korak3 from '../Koraci/Korak3';


const KonfiguratorModal = ({ functionality }) => {

    const [korak1, setKorak1] = useState(true);
    const [korak2, setKorak2] = useState(false);
    const [korak3, setKorak3] = useState(false);

    const nextStep1 = () => {
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

    const nextStep2 = () => {
        let checkboxChecked = false;
        let forma = document.getElementById('servicesForm');
        let chosenServices = []
        for (let i = 0; i < forma.length; i++) {
            if (forma[i].checked === true) {
                let element = forma[i];
                let chosenService = [element.name, element.value];
                chosenServices.push(chosenService);
                checkboxChecked = true;
            }
        }
        sessionStorage.setItem('services', chosenServices);
        if (checkboxChecked) {
            setKorak2(false);
            setKorak3(true);
        }
        else {
            alert('Morate odabrati bar jednu uslugu!')
        }
    }

    const previousStep2 = () => {
        console.log('click');
        setKorak2(false);
        setKorak1(true);
    }

    const nextStep3 = () => {
        let forma = document.getElementById('personalData');
        let unfilledRequiredFields = []
        for (let i = 0; i < forma.length; i++) {
            if (forma[i].required && forma[i].value == '' || forma[i].value == null) {
                unfilledRequiredFields.push(forma[i].name);
            }
        }
        if (unfilledRequiredFields.length > 1) {
            alert(`Polja "${unfilledRequiredFields}" moraju biti popunjena!`)
        }
        else if (unfilledRequiredFields.length == 1) {
            alert(`Polje "${unfilledRequiredFields}" mora biti popunjeno!`)
        }
        else {
            let personalData = []
            for (let i = 0; i < forma.length; i++) {
                personalData.push(forma[i].name)
                personalData.push(forma[i].value)
            }
            sessionStorage.setItem('personalData', personalData);
        }
    }

    return (
        <Router>
            <div className='modal-background'>
                <div className='modal-container'>
                    <button onClick={functionality}>X</button>
                    <h3>Konfigurator servisa</h3>
                    {korak1 && < Korak1 functionality={nextStep1} />}
                    {korak2 && < Korak2 nextStep={nextStep2} previousStep={previousStep2} />}
                    {korak3 && <Korak3 nextStep={nextStep3} />}
                </div>

            </div>
        </Router>
    )
}

export default KonfiguratorModal

