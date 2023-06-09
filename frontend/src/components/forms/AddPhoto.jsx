import React from 'react'
import personIcon from '../../assets/Desktop View/Icons/person.png'
import styles from './forms.module.css'
import Button from '../buttons/Button'

const AddPhoto = ({setCount}) => {


  return (
    <div className={styles.formsStep2}>
        <h2 className={styles.heading}>Add Photo</h2>
        <p className={styles.photoDescription}>Add a photo so other members know who you are</p>
        <div className={styles.personIconWrapper}>
            <img src={personIcon} className={styles.personIcon}/>
        </div>
        <div className={styles.upload}>
        <Button variant='primary' type='upload-photo'>Upload a photo</Button>
        <p className={styles.skip} onClick={() => setCount(3)}>Skip</p>
        </div>
        {/* {buttonClick ? <div className={styles.continueUpload}>
        <Button variant='primary' type='continue'>Continue</Button>
        </div> : null
        } */}
        
        
    </div>
  )
}

export default AddPhoto