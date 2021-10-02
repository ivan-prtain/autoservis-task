import React from 'react'

const ActivatedCoupon = ({ total, discount }) => {
    return (
        <div>
            <div>
                <p>Hvala vam, unijeli ste ispravan kod kupona</p>
                <p>OSNOVICA: <span id='osnovica'>{total}</span> kn</p>
                <p>Popust (30%) <span id='popust'>{discount}</span> kn</p>
            </div>
        </div>
    )
}

export default ActivatedCoupon
