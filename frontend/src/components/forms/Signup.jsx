import React, {useState,useEffect} from 'react'
import Input from './Input'
import Button from '../buttons/Button'
import {Link} from 'react-router-dom'

const Signup = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <form>
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
        <Button variant='primary' type='large'>Create Account</Button>
        <Button variant='secondary' type='large'>Sign up with Google</Button>
        <div>
          <p>Already have an account?</p>
          <Link>Log In</Link>
          </div>
    </form>
  )
}

export default Signup