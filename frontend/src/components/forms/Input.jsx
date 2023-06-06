import React from 'react'

const Input = ({label,name,type, placeholder, inputValue, setInputValue}) => {
  return (
    <div>
        <label>{label}</label>
        <div>
            <input
                placeholder={placeholder}
                type={type}
                name={name}
                value={inputValue}
                onChange={setInputValue}
                onBlur={e => e.target.placeholder = `${placeholder}`}
                onFocus={e => e.target.placeholder = `Enter a valid ${name}`}
                required
            />
        </div>
    </div>
  )
}

export default Input