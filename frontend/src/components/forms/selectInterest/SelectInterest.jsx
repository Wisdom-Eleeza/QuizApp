import React, { useState } from 'react'
import styles from './selectInterest.module.css'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'
import {GrFormAdd} from 'react-icons/gr'

const SelectInterest = () => {
  const [social, setSocial] = useState('')
  const [personal, setPersonal] = useState('')
  const [entertainment, setEntertainment] = useState('')
 const [rewards, setRewards] = useState('')
 const [selectectedInterest, setSelectectedInterest] = useState([])

  const dispatch = useDispatch()

  const handleSelectedInterest = (value)=>{
    setSelectectedInterest(prev => [...prev, value])
  }

  return (
    <div className={styles.formsStep3}>
      <h2 className={styles.heading}>Hey there! What brings you here?</h2>
      <p className={styles.interestDescription}>
        This will help us make great recommendations.
      </p>

      <div className={styles.btn1}>
        <button className={selectectedInterest.includes('Social Interaction')? styles.btnSelected : styles.addBtn} onClick={()=>handleSelectedInterest('Social Interaction')}>
          <GrFormAdd className={styles.addIcon}/>
          <span className={styles.interestSpan}>Social Interaction</span>
        </button>
      </div>

      <div className={styles.btn2}>
        <button className={selectectedInterest.includes('Personal development')? styles.btnSelected : styles.addBtn} onClick={()=>handleSelectedInterest('Personal development')}>
          <GrFormAdd className={styles.addIcon}/>
          <span className={styles.interestSpan}>Personal development</span>
        </button>
      </div>

      <div className={styles.btn3}>
        <button className={selectectedInterest.includes('Entertainment and Fun')? styles.btnSelected : styles.addBtn} onClick={()=>handleSelectedInterest('Entertainment and Fun')}>
          <GrFormAdd className={styles.addIcon}/>
          <span className={styles.interestSpan}>Entertainment and Fun </span>
        </button>
      </div>

      <div className={styles.btn4}>
        <button className={selectectedInterest.includes('Rewards and recognition')? styles.btnSelected : styles.addBtn} onClick={()=>handleSelectedInterest('Rewards and recognition')}>
          <GrFormAdd className={styles.addIcon}/>
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
