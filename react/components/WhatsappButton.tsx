import React from 'react';
import PropTypes from 'prop-types'

type Props = {
    logo: string      // WhatsApp.png
    phone: string    // 3507064545
    message: string // Estas comunicandote con vtex university, por favor ingresa tu duda
}

const WhatsappButton = ({logo, phone, message}: Props) => {
    console.log(logo, phone, message);
    
    return <>
        <p>{logo}</p>
        <p>{phone}</p>
        <p>{message}</p>
    </>
}

WhatsappButton.protoTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "1126263434",
    message: "Estas comunicandote con vtex university, por favor ingresa tu duda"
}

export default WhatsappButton