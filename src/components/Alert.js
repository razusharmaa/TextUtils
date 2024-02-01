import React from 'react'
import PropTypes from 'prop-types'


function Alert(props) {

    const capitalize=(txt)=>{
       
            const lower=txt.toLowerCase();
            return lower[0].toUpperCase()+lower.slice(1)
        
    }

    return (
        props.alertMain && <div className={`alert alert-${props.alertMain.type}`} role="alert">
                        {capitalize(props.alertMain.type)}:{props.alertMain.msg}
        </div>
    )
}

export default Alert
