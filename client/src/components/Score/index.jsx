import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './Score.css'

export default (props) => {
  const { percentage, size } = props
  return (
    <div className="Score" style={{width: size || 50}}>
      <CircularProgressbar
        percentage={percentage}
        text={`${percentage}%`}
        styles={{
          text: { fontSize: 32 }
        }}
      />
    </div>
  )
}