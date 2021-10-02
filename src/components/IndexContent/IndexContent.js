import React from 'react'
import './IndexContent.css'

const IndexContent = ({ functionality, directStyle }) => {
    return (
        <div className='main-content' style={{ opacity: directStyle }}>

            <div className='main-content-title'>Pritisnite gumb niže kako biste pokrenuli</div>
            <button className='start-button' style={{ marginTop: '60px' }} onClick={functionality}>Pokreni konfigurator</button>

        </div>
    )
}

export default IndexContent
