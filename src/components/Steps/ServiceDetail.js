import React from 'react'
import './Steps.css'

const ServiceDetail = ({ service }) => {
    return (
        <div>
            <span className='service-name'>{service[0]}: </span>
            <span className='service-price'>{service[1]} Kn</span>
        </div>
    )
}

export default ServiceDetail
