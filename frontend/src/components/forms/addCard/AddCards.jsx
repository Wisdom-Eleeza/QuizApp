import React from 'react'
import Button from '../../buttons/Button'
import styles from './addCard.module.css'

const AddCards = ({text, color}) => {
  return (
    <div className={styles.addCard}>
      <div className={`${styles[color]} ${styles.card}`}></div>
      <div className={styles.content}>
      <h2 className={styles.heading}>{text}</h2>
        <Button type='add-btn'>Add</Button>
      </div>
        
      
    </div>
  )
}

export default AddCards
