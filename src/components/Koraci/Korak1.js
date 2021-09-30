import React from 'react'
import Button from '../Button'


const Korak1 = ({ functionality, visibility, sendState }) => {




    return (
        <div style={{ display: visibility }}>
            <div>
                Korak 1. Odaberite proizvođača vašeg vozila
            </div>
            <form style={{ height: '10rem' }} name='radioForm'>
                <input type='radio' id='Peugeot' value='Peugeot' name='manufacturer' />
                <label htmlFor="Peugeot">Peugeot</label>
                <input type='radio' id='Volkswagen' value='Volkswagen' name='manufacturer' />
                <label htmlFor="Volkswagen">Volkswagen</label>
                <input type='radio' id='Citroen' value='Citroen' name='manufacturer' />
                <label htmlFor="Citroen">Citroen</label>
                <input type='radio' id='Audi' value='Audi' name='manufacturer' />
                <label htmlFor="Audi">Audi</label>
                <input type='radio' id='BMW' value='BMW' name='manufacturer' />
                <label htmlFor="BMW">BMW</label>
                <input type='radio' id='Seat' value='Seat' name='manufacturer' />
                <label htmlFor="Seat">Seat</label>
                <input type='radio' id='Alfa Romeo' value='Alfa Romeo' name='manufacturer' />
                <label htmlFor="Alfa Romeo">Alfa Romeo</label>
                <input type='radio' id='Kia' value='VolksKiawagen' name='manufacturer' />
                <label htmlFor="Kia">Kia</label>
                <input type='radio' id='Hyundai' value='Hyundai' name='manufacturer' />
                <label htmlFor="Hyundai">Hyundai</label>
                <input type='radio' id='Honda' value='Honda' name='manufacturer' />
                <label htmlFor="Honda">Honda</label>
                <input type='radio' id='Toyota' value='Toyota' name='manufacturer' />
                <label htmlFor="Toyota">Toyota</label>
            </form>
            <hr />

            <Button text='dalje' functionality={functionality} />

        </div>
    )
}

export default Korak1
