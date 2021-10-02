import React from 'react'
import { useState } from 'react'
import './Steps.css'

const Kupon = ({ applyCoupon }) => {
    const [kupon, setKupon] = useState(false)

    const activateCouponInput = () => {
        setKupon(true)
    }

    return (
        <div>

            {
                !kupon && <button className='btn' onClick={activateCouponInput}>Imam Kupon</button>
            }

            {
                kupon &&

                <form >
                    <input id='couponNumber' type='text' placeholder='Unesite kod kupona ovdje'></input>
                    <button className='btn' onClick={applyCoupon}>Primjeni</button>
                </form>


            }

        </div>


    )
}

export default Kupon
