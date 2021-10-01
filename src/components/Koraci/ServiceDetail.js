import React from 'react'
import './Koraci.css'

const ServiceDetail = ({ service }) => {
    return (
        <div>
            <span class='service-name'>{service[0]}: </span>
            <span class='service-price'>{service[1]} Kn</span>
        </div>
    )
}

export default ServiceDetail
