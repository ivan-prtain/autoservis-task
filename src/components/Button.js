import React from 'react'

const Button = ({ text, functionality, cssClass }) => {
    return <button className={cssClass} onClick={functionality} >{text}</button>
}

export default Button
