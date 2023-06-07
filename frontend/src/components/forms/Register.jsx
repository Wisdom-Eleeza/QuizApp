import React, {useState} from 'react'
import Input from './Input'
import Button from '../buttons/Button'
import styles from './forms.module.css'
import { NavLink } from 'react-router-dom'
import google from '../../assets/Desktop View/Icons/Google logo.png'

const Register = () => {
    const [inputValue, setInputValue] = useState('')
  return (
    <div className={styles.formsStep1}>
        <h2 className={styles.registerHeading}>Create Account</h2>
        <Input
          label='Name'
          placeholder='John Doe'
          type = 'text'
          name='name'
          value={inputValue}
          setInputValue = { e => setInputValue(e.target.value)}
        />
        <Input
          label='Email'
          placeholder='johndoe@gmail.com'
          type = 'email'
          name='email'
          value={inputValue}
          setInputValue = { e => setInputValue(e.target.value)}
        />
        <Input
          label='Password'
          placeholder='***********'
          type = 'password'
          name='Password'
          value={inputValue}
          setInputValue = { e => setInputValue(e.target.value)}
        />
        <div className={styles.createAccountBtn}><Button variant='primary' type='large'>Create Account</Button></div>
        
        <Button variant='secondary' type='Large'>
          <img src={google} alt='google logo' className={styles.googleLogo}/>
          <span className={styles.signup}>Sign up with Google</span>
          </Button>
        <div className={styles.authenticationAlt}>
          <p>Already have an account?</p>
          <NavLink className={styles.AltNavigate}>Log In</NavLink>
          </div>
    </div>
  )
}

export default Register