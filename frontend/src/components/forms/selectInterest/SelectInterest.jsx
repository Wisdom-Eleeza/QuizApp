import React from 'react'
import styles from './selectInterest.module.css'
import Button from '../../buttons/Button'
import addIcon from '../../../assets/Desktop View/Icons/black-add-icon.png'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'

const SelectInterest = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.formsStep3}>
      <h2 className={styles.heading}>Hey there! What brings you here?</h2>
      <p className={styles.interestDescription}>
        This will help us make great recommendations.
      </p>

      <div className={styles.btn1}>
        <button className={styles.addBtn}>
          <img src={addIcon} className={styles.addIcon} />
          <span className={styles.interestSpan}>Social Interaction</span>
        </button>
      </div>

      <div className={styles.btn2}>
        <button className={styles.addBtn}>
          <img src={addIcon} className={styles.addIcon} />
          <span className={styles.interestSpan}>Personal development</span>
        </button>
      </div>

      <div className={styles.btn3}>
        <button className={styles.addBtn}>
          <img src={addIcon} className={styles.addIcon} />
          <span className={styles.interestSpan}>Entertainment and Fun </span>
        </button>
      </div>

      <div className={styles.btn4}>
        <button className={styles.addBtn}>
          <img src={addIcon} className={styles.addIcon} />
          <span className={styles.interestSpan}>Rewards and recognition</span>
        </button>
      </div>

      <div className={styles.continueInterest}>
        <button
          className={styles.continueBtn}
          onClick={() => dispatch(increaseCount())}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default SelectInterest
