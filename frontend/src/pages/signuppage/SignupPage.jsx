import React from 'react'
import Signup from '../../components/forms/Signup'
import styles from '../signuppage/signupPage.module.css'
import Gallery from '../../components/gallery/Gallery'

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <Gallery/>
      <div className={styles.formSection}>
      <div className={styles.pageCounter}>
        <p>Step <span className={styles.counter}>1</span> of 4</p>
        <p className={styles.exit}>Exit</p>
      </div>
        <Signup/></div>
    </div>
  )
}

export default SignupPage