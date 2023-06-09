import React from 'react'
import "./Header.css"

const Header = ({ cssTheme }) => {
    return (
        <div>

            <div className={cssTheme}>
                <img className='logo-img' src="https://www.amcham.hr/storage/upload/novosti/tokic_-_500x400_94015.jpg" alt="logo" ></img>
                <div>
                    <h3 className='header-text'>Konfigurator servisa</h3>
                    <h4 className='header-text'>Izračunajte trošak servisa</h4>
                </div>
            </div>
            <hr className='line' />

        </div>
    )
}

export default Header
