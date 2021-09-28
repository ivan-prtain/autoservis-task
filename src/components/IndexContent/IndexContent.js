import React from 'react'

const IndexContent = ({ functionality }) => {
    return (
        <div>

            <div>Pritisnite gumb niže kako biste pokrenuli</div>
            <button onClick={functionality}>Pokreni konfigurator</button>

        </div>
    )
}

export default IndexContent
