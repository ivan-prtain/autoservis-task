import React from 'react'
import './Steps.css'

const Step3 = ({ nextStep, previousStep, setPersonalInfo, personalInfo }) => {

    let personalInfoCopy = personalInfo;

    /**
     * handleChange
     * @param {*} field 
     */
    let handleChange = field => e => {
        personalInfoCopy[field] = e.target.value
        setPersonalInfo(personalInfoCopy)
    }

    return (
        <div>
            <div>Korak 3. Vaši kontakt podaci</div>

            <form id='personalData' >

                <div className='personalData-box1'>
                    <div>
                        <input type="text" id="imeiprezime" name="Ime i Prezime" placeholder="Ime i Prezime *" defaultValue={personalInfo.imeiprezime} onChange={handleChange('imeiprezime')} required />
                    </div>
                    <div>
                        <input type="text" id="telbroj" name="Broj telefona" placeholder="Broj telefona *" defaultValue={personalInfo.telbroj} onChange={handleChange('telbroj')} required />
                    </div>
                </div>

                <div className='personalData-box2'>
                    <div>
                        <input type="text" id="email" name="Email adresa" placeholder="Email adresa *" defaultValue={personalInfo.email} onChange={handleChange('email')} required />
                    </div>
                    <div>
                        <textarea id="napomena" name="Napomena" placeholder="Napomena" defaultValue={personalInfo.napomena} maxLength={370} onChange={handleChange('napomena')} />
                    </div>
                </div>

            </form>

            <button className='btn' onClick={previousStep}>Nazad</button>

            <button className='btn' onClick={nextStep}>Dalje</button>
        </div>
    )
}

export default Step3
