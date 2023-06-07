import React from 'react'
import styles from './forms.module.css'
import Button from '../buttons/Button'
import addIcon from '../../assets/Desktop View/Icons/black-add-icon.png'

const SelectInterest = () => {
  return (
    <div className={styles.formsStep3}>
      <h2 className={styles.heading}>Hey there! What brings you here?</h2>
      <p className={styles.interestDescription}>This will help us make great recommendations.</p>

      <Button variant='secondary' type='continue' borderType='curvy'>
        <img src={addIcon} className={styles.googleLogo}/>
        <span className={styles.interestSpan}>Social Interaction</span>
      </Button>

      <Button variant='secondary' type='continue' borderType='curvy'>
        <img src={addIcon} className={styles.googleLogo}/>
        <span className={styles.interestSpan}>Personal development</span>
      </Button>

      <Button variant='secondary' type='continue' borderType='curvy'>
      <img src={addIcon} className={styles.googleLogo}/>
        <span className={styles.interestSpan}>Entertainment and Fun </span>
      </Button>

      <Button variant='secondary'type='continue' borderType='curvy'>
      <img src={addIcon} className={styles.googleLogo}/>
        <span className={styles.interestSpan}>Rewards and recognition</span>
      </Button>
      
      <Button variant='primary' type='continue' >Continue</Button>
    </div>
  )
}

export default SelectInterest
