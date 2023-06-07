import React from 'react'
import styles from './button.module.css'
const Button = ({variant, type, children, borderType}) => {
  return (
    <div>
      <button className={`${styles.button} ${styles[variant]} ${styles[type]} ${styles[borderType]}`}>
      {children}
      </button>
    </div>
  )
}
export default Button