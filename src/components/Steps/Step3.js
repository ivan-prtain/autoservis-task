import React from 'react'
import './Steps.css'

const Step3 = ({ nextStep, previousStep, visibility, setPersonalInfo, personalInfo }) => {

    let personalInfoCopy = personalInfo;
    let bucket = []

    let handleChange = input => e => {
        bucket.push({ [input]: e.target.value })
    }

    function nextStepAndsend() {

        nextStep();
    }

    function customClick() {
        console.log(bucket)
    }

    return (
        <div style={{ display: visibility }}>
            <div>Korak 3. Vaši kontakt podaci</div>

            <form id='personalData' style={{ display: 'flex', flexDirection: 'column' }}>
                <input type="text" id="imeiprezime" name="Ime i Prezime" placeholder="Ime i Prezime *" defaultValue={''} onChange={handleChange('')} required />
                <input type="text" id="email" name="Email adresa" placeholder="Email adresa *" required />
                <input type="text" id="telbroj" name="Broj telefona" placeholder="Broj telefona *" required />
                <textarea id="napomena" name="Napomena" placeholder="Napomena" value={personalInfo.napomena} />
            </form>

            <button className='btn' onClick={previousStep}>Nazad</button>

            <button className='btn' onClick={customClick}>Dalje</button>
        </div>
    )
}

export default Step3
