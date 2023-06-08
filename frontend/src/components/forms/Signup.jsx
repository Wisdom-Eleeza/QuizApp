import React, { useState } from 'react'
import styles from './forms.module.css'
import Register from './Register'
import AddPhoto from './AddPhoto'
import SelectInterest from './SelectInterest'
import AddInterst from './AddInterst'
import CompletedRegistration from './CompletedRegistration'

const Signup = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const [addPhoto, setAddPhoto] = useState(false)
  const [addInterest, setAddInterest] = useState(false)
  const [Complete, setComplete] = useState(false)

  return (
    <form  className={styles.forms}>
      {registerForm ? <AddPhoto addPhoto setAddPhoto/> : <Register registerForm setRegisterForm/>}
      
      {addPhoto ? <SelectInterest addInterest setAddInterest/> : null}
      {addInterest ? <AddInterst/> : null}
      {completed ? <CompletedRegistration/> : null}
    </form>
  )
}

export default Signup