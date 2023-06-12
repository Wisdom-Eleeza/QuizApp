import React, { useState } from 'react'
import styles from './addInterest.module.css'
import AddCards from './addCard/AddCards'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'

const AddInterst = ({ setCompleted }) => {
  const [click, setClick] = useState(false)
  const dispatch = useDispatch()

  const handleClick = () => {
    setCompleted(true)
    dispatch(increaseCount())
    setClick(true)
  }

  return (
    <div className={styles.formsStep4}>
      <h2 className={styles.heading}>
        Let’s get started by picking some interests
      </h2>
      <p className={styles.addInterestDescription}>
        Alright, let's pick something we're interested in and get started!
      </p>
      <div className={styles.addCards}>
        <AddCards color="mauve" text="Gaming" />
        <AddCards color="green" text="Fashion" />
        <AddCards color="orange" text="Music" />
        <AddCards color="blue" text="Reading" />
      </div>

      <button onClick={handleClick} className={styles.continueBtn}>Continue</button>
    </div>
  )
}

export default AddInterst
