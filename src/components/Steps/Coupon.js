import React from 'react'
import { useState } from 'react'
import './Steps.css'

const Coupon = ({ applyCoupon }) => {
    const [coupon, setCoupon] = useState(false)

    /**
     * activateCouponInput
     */
    const activateCouponInput = () => {
        setCoupon(true)
    }

    return (
        <div className='coupon'>

            {
                coupon ?
                    <form >
                        <input id='couponNumber' type='text' placeholder='Unesite kod kupona ovdje'></input>
                        <button className='btn' onClick={applyCoupon}>Primjeni</button>
                    </form>
                    :
                    <button className='btn' onClick={activateCouponInput}>Imam Kupon</button>
            }
        </div>


    )
}

export default Coupon
