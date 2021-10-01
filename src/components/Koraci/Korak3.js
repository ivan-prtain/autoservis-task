import React from 'react'

const Korak3 = ({ nextStep, previousStep, visibility, sendInfo }) => {

    let personalInfo = {
        imeIprezime: '',
        email: '',
        telbroj: '',
        napomena: ''
    }

    function saveInfo() {
        personalInfo.imeIprezime = document.getElementById('imeiprezime').value
        personalInfo.email = document.getElementById('email').value
        personalInfo.telbroj = document.getElementById('telbroj').value
        personalInfo.napomena = document.getElementById('napomena').value
    }

    function nextStepAndsend() {
        saveInfo()
        sendInfo(personalInfo)
        nextStep();
    }

    return (
        <div style={{ display: visibility }}>
            <div>Korak 3. Vaši kontakt podaci</div>

            <form id='personalData' style={{ display: 'flex', flexDirection: 'column' }}>
                <input type="text" id="imeiprezime" name="Ime i Prezime" placeholder="Ime i Prezime *" required />
                <input type="text" id="email" name="Email adresa" placeholder="Email adresa *" required />
                <input type="text" id="telbroj" name="Broj telefona" placeholder="Broj telefona *" required />
                <textarea id="napomena" name="Napomena" placeholder="Napomena" />
            </form>

            <button onClick={previousStep}>Nazad</button>

            <button onClick={nextStepAndsend}>Dalje</button>
        </div>
    )
}

export default Korak3
