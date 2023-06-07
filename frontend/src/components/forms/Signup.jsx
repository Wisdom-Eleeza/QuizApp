import React from 'react'
import styles from './forms.module.css'
import Register from './Register'
import AddPhoto from './AddPhoto'
import SelectInterest from './SelectInterest'

const Signup = () => {

  return (
    <form  className={styles.forms}>
      <Register/>
      <AddPhoto/>
      <SelectInterest/>
    </form>
  )
}

export default Signup