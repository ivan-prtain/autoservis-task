import React from 'react'

const IndexContent = ({ functionality, directStyle }) => {
    return (
        <div style={{ opacity: directStyle }}>

            <div>Pritisnite gumb niže kako biste pokrenuli</div>
            <button style={{ marginTop: '60px' }} onClick={functionality}>Pokreni konfigurator</button>

        </div>
    )
}

export default IndexContent
