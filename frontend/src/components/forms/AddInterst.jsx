import React, { useState } from 'react'
import styles from './forms.module.css'
import AddCards from './addCard/AddCards'
import Button from '../buttons/Button'
import CompletedRegistration from './CompletedRegistration'

const AddInterst = ({setCount,count, setCompleted}) => {
  const [click, setClick] = useState(false)

  const handleClick = () =>{
    setClick(true)
  }
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

        <Button variant='primary' type='continue-add-btn'  page='signup' done="true" setCount={setCount} count={count} setCompleted={setCompleted}>Continue</Button>
    </div>
    
  )
}

export default AddInterst
