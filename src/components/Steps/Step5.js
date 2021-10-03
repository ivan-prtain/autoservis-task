import React from 'react'
import './Steps.css'

const Step5 = ({ close }) => {
    return (
        <div >
            <div>Vaša prijava je uspješno poslana!</div>
            <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u nakraćem mogućem roku. Hvala vam!</p>
            <button onClick={close} class='btn'>Zatvori</button>
        </div>

    )
}

export default Step5
