import React from 'react'
import Korak1 from '../Koraci/Korak1'
import Korak2 from '../Koraci/Korak2';
import './KonfiguratorModal.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { validate, saveCarManufacturer } from '../Koraci/Korak1Functions';
import Korak3 from '../Koraci/Korak3';
import Korak4 from '../Koraci/Korak4';


const KonfiguratorModal = ({ functionality }) => {

    const [korak, setKorak] = useState(1);
    const [totalPrice, setTotalPrice] = useState('');
    const [services, setServices] = useState([])
    const [chosenCar, setChosenCar] = useState('');
    const [personalInfo, setPersonalInfo] = useState({})


    const nextStep1 = () => {
        if (validate()[0]) {
            let pickedCar = validate()[1]
            /*  console.log('mozete dalje')
             console.log(sessionStorage.getItem('carManufacturer')); */
            setChosenCar(pickedCar)
            setKorak(2);
        }
        else {
            /*  console.log('odlucio')
             console.log(sessionStorage.getItem('carManufacturer')); */
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
            setKorak(3);
        }
        else {
            alert('Morate odabrati bar jednu uslugu!')
        }
    }

    const previousStep2 = () => {
        setKorak(1);
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

            setKorak(4);
        }
    }

    const previousStep3 = () => {
        setKorak(2);
    }

    const edit = (step) => {
        setKorak(step)
    }



    return (
        <Router>
            <div className='modal-background'>
                <div className='modal-container'>
                    <button className='close' onClick={functionality}>X</button>
                    <h3 className='title'>Konfigurator servisa</h3>
                    < Korak1
                        functionality={nextStep1}
                        visibility={korak == 1 ? '' : 'none'}
                        sendState={chosenCar => setChosenCar(chosenCar)}
                    />

                    < Korak2
                        nextStep={nextStep2}
                        sendState={totalPrice => setTotalPrice(totalPrice)}
                        sendState2={services => setServices(services)}
                        previousStep={previousStep2}
                        visibility={korak == 2 ? '' : 'none'} />
                    < Korak3
                        nextStep={nextStep3}
                        previousStep={previousStep3}
                        visibility={korak == 3 ? '' : 'none'}
                        sendInfo={personalInfo => setPersonalInfo(personalInfo)} />
                    < Korak4 visibility={korak == 4 ? '' : 'none'}
                        carInfo={chosenCar}
                        price={totalPrice}
                        services={services}
                        personalInfo={personalInfo}
                        edit={korak => setKorak(korak)}
                    />

                </div>
            </div>
        </Router>
    )
}

export default KonfiguratorModal

