import React from 'react'

const Notifcation = ({ message, sign }) => {
    const styleColor = {
        showColor: {
            color: sign,
            fontSize: "20px"
        }
    }
  return (
      <div className='notification-container'>
          <span style={styleColor.showColor}>{message}</span>
    </div>
  )
}

export default Notifcation