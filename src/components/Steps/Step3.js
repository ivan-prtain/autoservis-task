import React from 'react'
import './Steps.css'

const Step3 = ({ nextStep, previousStep, setPersonalInfo, personalInfo }) => {

    let personalInfoCopy = personalInfo;

    let handleChange = field => e => {
        personalInfoCopy[field] = e.target.value
        setPersonalInfo(personalInfoCopy)
        console.log(personalInfo)
    }

    /* function handleChange(event) {
        bucket[event.target.id] = event.target.value
        console.log(bucket)
    } */

    function nextStepAndsend() {

        nextStep();
    }

    return (
        <div>
            <div>Korak 3. Vaši kontakt podaci</div>

            <form id='personalData' style={{ display: 'flex', flexDirection: 'column' }}>
                <input type="text" id="imeiprezime" name="Ime i Prezime" placeholder="Ime i Prezime *" defaultValue={personalInfo.imeiprezime} onChange={handleChange('imeiprezime')} required />
                <input type="text" id="email" name="Email adresa" placeholder="Email adresa *" defaultValue={personalInfo.email} onChange={handleChange('email')} required />
                <input type="text" id="telbroj" name="Broj telefona" placeholder="Broj telefona *" defaultValue={personalInfo.telbroj} onChange={handleChange('telbroj')} required />
                <textarea id="napomena" name="Napomena" placeholder="Napomena" defaultValue={personalInfo.napomena} onChange={handleChange('napomena')} />
            </form>

            <button className='btn' onClick={previousStep}>Nazad</button>

            <button className='btn' onClick={nextStep}>Dalje</button>
        </div>
    )
}

export default Step3
