import React from 'react'
import { useState } from 'react'

const Kupon = ({ applyCoupon }) => {
    const [kupon, setKupon] = useState(false)

    const activateCouponInput = () => {
        setKupon(true)
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>

            {
                !kupon && <button onClick={activateCouponInput}>Imam Kupon</button>
            }

            {
                kupon &&

                <form >
                    <input id='couponNumber' type='text' placeholder='Unesite kod kupona ovdje'></input>
                    <button onClick={applyCoupon}>Primjeni</button>
                </form>


            }

        </div>


    )
}

export default Kupon
