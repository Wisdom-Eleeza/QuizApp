import React, { useState } from 'react'
import styles from './forms.module.css'
import Register from './registerForm/Register'
import AddPhoto from './uploadPhoto/AddPhoto'
import SelectInterest from './selectInterest/SelectInterest'
import AddInterst from './addInterest/AddInterst'
import CompletedRegistration from './CompletedRegistration'
import { useSelector } from 'react-redux'

const Signup = () => {
  const [completed, setCompleted] = useState(false)

  const { count } = useSelector(store => store.counter)

  const getNextStep = count => {
    switch (count) {
      case 1:
        return <Register />
      case 2:
        return <AddPhoto />
      case 3:
        return <SelectInterest />
      case 4:
        return <AddInterst setCompleted={setCompleted} />
      case 5:
        return <CompletedRegistration />
      default:
        return
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form className={styles.forms} onSubmit={handleSubmit}>
      {!completed && (
        <div className={styles.pageCounter}>
          <p className={styles.counter}>
            Step {count}
            <span> of 4</span>
          </p>
          <p className={styles.exit}>Exit</p>
        </div>
      )}

      {getNextStep(count)}
    </form>
  )
}

export default Signup
