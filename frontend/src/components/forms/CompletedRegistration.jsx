import React from 'react'
import celebrate from '../../assets/Desktop View/Images/Frame.png'
import styles from './forms.module.css'
import Button from '../buttons/Button'

const CompletedRegistration = () => {
  return (
    <div className={styles.completedRegistration}>
      <h2 className={styles.heading} >Woohoo!</h2>
      <p className={styles.completedDescription}>Hey there! Your registration is complete, get excited for the ultimate quiz experience of your life. Let's do this!</p>
      <img src={celebrate} className={styles.img}/>
      <Button variant='primary' type='continue-add-btn'>Continue</Button>
    </div>
  )
}

export default CompletedRegistration
