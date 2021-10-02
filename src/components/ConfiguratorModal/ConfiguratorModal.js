import React from 'react'
import Step1 from '../Steps/Step1'
import Step2 from '../Steps/Step2';
import './ConfiguratorModal.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { validate } from '../Steps/Step1Functions';
import Step3 from '../Steps/Step3';
import Step4 from '../Steps/Step4';


const ConfiguratorModal = ({ functionality }) => {

    const [step, setStep] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [services, setServices] = useState([])
    const [chosenCar, setChosenCar] = useState('');
    const [personalInfo, setPersonalInfo] = useState({})


    const nextStep1 = () => {
        if (validate()[0]) {
            let pickedCar = validate()[1]
            setChosenCar(pickedCar)
            setStep(2);
        }
        else {
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
        if (checkboxChecked) {
            setStep(3);
        }
        else {
            alert('Morate odabrati bar jednu uslugu!')
        }
    }

    const previousStep2 = () => {
        setStep(1);
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

            setStep(4);
        }
    }

    const previousStep3 = () => {
        setStep(2);
    }





    return (
        <Router>
            <div className='modal-background'>
                <div className='modal-container'>
                    <button className='close' onClick={functionality}>X</button>
                    <h3 className='title'>Konfigurator servisa</h3>
                    < Step1
                        functionality={nextStep1}
                        visibility={step == 1 ? '' : 'none'}
                        sendState={chosenCar => setChosenCar(chosenCar)}
                    />

                    < Step2
                        nextStep={nextStep2}
                        sendState={totalPrice => setTotalPrice(totalPrice)}
                        sendState2={services => setServices(services)}
                        previousStep={previousStep2}
                        visibility={step == 2 ? '' : 'none'} />
                    < Step3
                        nextStep={nextStep3}
                        previousStep={previousStep3}
                        visibility={step == 3 ? '' : 'none'}
                        sendInfo={personalInfo => setPersonalInfo(personalInfo)} />
                    < Step4 visibility={step == 4 ? '' : 'none'}
                        carInfo={chosenCar}
                        price={totalPrice}
                        services={services}
                        personalInfo={personalInfo}
                        edit={step => setStep(step)}
                    />

                </div>
            </div>
        </Router>
    )
}

export default ConfiguratorModal

