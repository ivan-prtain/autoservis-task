import React from 'react'
import './IndexContent.css'

const IndexContent = ({ functionality, directStyle }) => {
    return (
        <div class='main-content' style={{ opacity: directStyle }}>

            <div class='main-content-title'>Pritisnite gumb niže kako biste pokrenuli</div>
            <button class='start-button' style={{ marginTop: '60px' }} onClick={functionality}>Pokreni konfigurator</button>

        </div>
    )
}

export default IndexContent
