import React from 'react'
import styles from './button.module.css'
const Button = ({variant, type, children}) => {
  return (
    <div>
      <button className={`${styles.button} ${styles[variant]} ${styles[type]}`}>
      {children}
      </button>
    </div>
  )
}
export default Button