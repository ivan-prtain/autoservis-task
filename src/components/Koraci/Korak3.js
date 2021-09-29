import React from 'react'

const Korak3 = ({ nextStep }) => {
    return (
        <div>
            <div>Korak 3. Vaši kontakt podaci</div>

            <form id='personalData' style={{ display: 'flex', flexDirection: 'column' }}>
                <input type="text" id="imeiprezime" name="Ime i Prezime" placeholder="Ime i Prezime *" required />
                <input type="text" id="email" name="Email adresa" placeholder="Email adresa *" required />
                <input type="text" id="telbroj" name="Broj telefona" placeholder="Broj telefona *" required />
                <textarea id="napomena" name="Napomena" placeholder="Napomena" />
            </form>

            <button onClick={nextStep}>Dalje</button>
        </div>
    )
}

export default Korak3
