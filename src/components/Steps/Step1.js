import React from 'react'
import Button from '../Button'
import './Steps.css'


const Step1 = ({ functionality, selected }) => {

    if (selected !== '') {

        setTimeout(() => {
            document.getElementById(selected).checked = true
        }, 0);

    }



    return (
        <div>
            <div>
                Korak 1. Odaberite proizvođača vašeg vozila
            </div>
            <form className='radio-form' name='radioForm'>
                <div className='radio-elements'>

                    <label htmlFor="Peugeot">
                        <input type='radio' id='Peugeot' value='Peugeot' name='manufacturer' />
                        Peugeot
                    </label>
                    <label htmlFor="Volkswagen">
                        <input type='radio' id='Volkswagen' value='Volkswagen' name='manufacturer' />
                        Volkswagen
                    </label>
                    <label htmlFor="Citroen">
                        <input type='radio' id='Citroen' value='Citroen' name='manufacturer' />
                        Citroen
                    </label>
                    <label htmlFor="Audi">
                        <input type='radio' id='Audi' value='Audi' name='manufacturer' />
                        Audi
                    </label>
                    <label htmlFor="BMW">
                        <input type='radio' id='BMW' value='BMW' name='manufacturer' />
                        BMW
                    </label>
                    <label htmlFor="Seat">
                        <input type='radio' id='Seat' value='Seat' name='manufacturer' />
                        Seat
                    </label>
                    <label htmlFor="Alfa Romeo">
                        <input type='radio' id='Alfa Romeo' value='Alfa Romeo' name='manufacturer' />
                        Alfa Romeo
                    </label>
                    <label htmlFor="Kia">
                        <input type='radio' id='Kia' value='VolksKiawagen' name='manufacturer' />
                        Kia
                    </label>
                </div>

                <div className='radio-elements'>


                    <label htmlFor="Hyundai">
                        <input type='radio' id='Hyundai' value='Hyundai' name='manufacturer' />
                        Hyundai
                    </label>
                    <label htmlFor="Honda">
                        <input type='radio' id='Honda' value='Honda' name='manufacturer' />
                        Honda
                    </label>
                    <label htmlFor="Toyota">
                        <input type='radio' id='Toyota' value='Toyota' name='manufacturer' />
                        Toyota
                    </label>
                </div>


            </form>
            <hr />

            <Button cssClass='btn' text='Dalje' functionality={functionality} />

        </div>
    )
}

export default Step1
