import React from 'react'
import Step1 from '../Steps/Step1'
import Step2 from '../Steps/Step2';
import './ConfiguratorModal.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { validate } from '../Steps/Step1Functions';
import Step3 from '../Steps/Step3';
import Step4 from '../Steps/Step4';
import Step5 from '../Steps/Step5';


const ConfiguratorModal = ({ functionality }) => {

    const [step, setStep] = useState(1);
    const [chosenCar, setChosenCar] = useState('');
    const [totalPrice, setTotalPrice] = useState({
        total: 0,
        discountedTotal: 0,
        discount: 0,
        couponApplied: false
    });
    const [services, setServices] = useState([]);
    const [checkboxes, setCheckboxes] = useState({
        uljeifilter: false,
        promjenaPakni: false,
        promjenaGuma: false,
        servisKlime: false,
        balansiranjeGuma: false,
        uljeKocnica: false
    })
    const [personalInfo, setPersonalInfo] = useState({
        imeiprezime: '',
        email: '',
        telbroj: '',
        napomena: ''
    });
    const [test, setTest] = useState();

    const saveCheckbox = (id, condition) => {
        console.log(id)
        console.log(condition)
        let checkboxesCopy = checkboxes;
        checkboxesCopy[id] = condition;
        setCheckboxes(checkboxesCopy);
    }


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

    const nextStep4 = () => {
        setStep(5)
    }

    const previousStep4 = () => {
        setStep(3)
    }

    const saveTest = (data) => {
        let testCopy = test;
        testCopy[data.id] = data.checked;
        setTest(testCopy);
    }


    return (
        <Router>
            <div className='modal-background'>
                <div className='modal-container'>
                    <button className='close' onClick={functionality}>X</button>
                    <h3 className='title'>Konfigurator servisa</h3>
                    {step == 1 && < Step1
                        functionality={nextStep1}
                        selected={chosenCar}
                    />}

                    {step == 2 && < Step2
                        nextStep={nextStep2}
                        totalPrice={totalPrice}
                        setTotalPrice={setTotalPrice}
                        services={services}
                        setServices={setServices}
                        previousStep={previousStep2}
                        checkboxes={checkboxes}
                        saveCheckbox={saveCheckbox}
                        checkboxes={checkboxes}
                    />}
                    {step == 3 && < Step3
                        nextStep={nextStep3}
                        previousStep={previousStep3}
                        setPersonalInfo={setPersonalInfo}
                        personalInfo={personalInfo}
                    />}
                    {step == 4 && < Step4 visibility={step == 4 ? '' : 'none'}
                        carInfo={chosenCar}
                        price={totalPrice}
                        services={services}
                        personalInfo={personalInfo}
                        edit={step => setStep(step)}
                        nextStep={nextStep4}
                        previousStep={previousStep4}
                    />}
                    < Step5 visibility={step == 5 ? '' : 'none'}
                    />


                </div>
            </div>
        </Router>
    )
}

export default ConfiguratorModal

