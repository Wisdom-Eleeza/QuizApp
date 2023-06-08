import React from 'react'
import styles from './forms.module.css'
import AddCards from './addCard/AddCards'
import Button from '../buttons/Button'

const AddInterst = () => {
  return (
    <div className={styles.formsStep4}>
      <h2 className={styles.addInterestHeading}>Let’s get started by picking some interests</h2>
      <p className={styles.addInterestDescription}>Alright, let's pick something we're interested in and get started!</p>
      <div className={styles.addCards}>
        <AddCards color='mauve' text='Gaming'/>
        <AddCards color='green' text='Fashion'/>
        <AddCards color='orange' text='Music'/>
        <AddCards color='blue' text='Reading'/>
      </div>
        <Button variant='primary' type='continue-add-btn'>Continue</Button>
    </div>
  )
}

export default AddInterst
