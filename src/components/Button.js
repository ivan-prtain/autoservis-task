import React from 'react'

const Button = ({ text, functionality }) => {
    return <button onClick={functionality} >{text}</button>
}

export default Button
