import React from 'react'
import Styles from './style.module.css'

function InlineCSS() {
    const inline={color:"blue" , fontSize:"20px"}
  return (
    <div>
      <h1  style={inline}>Inline</h1>
      <h1 className={Styles.header}>From Module</h1>
     
    </div>
  )
}

export default InlineCSS
