import React from 'react'
import Korak1 from '../Koraci/Korak1'
import './KonfiguratorModal.css'

const KonfiguratorModal = ({ functionality }) => {
    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <button onClick={functionality}>X</button>
                <h3>Konfigurator servisa</h3>
                <Korak1 />

            </div>

        </div>
    )
}

export default KonfiguratorModal

