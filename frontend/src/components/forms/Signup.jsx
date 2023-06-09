import React, { useState } from 'react'
import styles from './forms.module.css'
import Register from './Register'
import AddPhoto from './AddPhoto'
import SelectInterest from './SelectInterest'
import AddInterst from './AddInterst'
import CompletedRegistration from './CompletedRegistration'

const Signup = () => {  
  const [count, setCount] = useState(1)
  const [completed, setCompleted] = useState(false)
  

  const getNextStep = (count) =>{
    switch(count){
      case 1:
          return <Register setCount={setCount}  count={count}/>
      case 2: 
       return <AddPhoto setCount={setCount}/>
      case 3:
        return <SelectInterest setCount={setCount} count={count}/>
        case 4:
          return <AddInterst setCount={setCount} count={count} setCompleted={setCompleted}/>
        case 5:
          return <CompletedRegistration />
      default:
        return
    }
  }

  const handleSubmit = e =>{
    e.preventDefault();
  }

  return (
    <form  className={styles.forms} onSubmit={handleSubmit}>
      {!completed &&
      <div className={styles.pageCounter}>
      <p className={styles.counter}>Step {count}<span > of 4</span></p>
      <p className={styles.exit}>Exit</p>
    </div>}
      
      {getNextStep(count)}
    </form>
  )
}

export default Signup