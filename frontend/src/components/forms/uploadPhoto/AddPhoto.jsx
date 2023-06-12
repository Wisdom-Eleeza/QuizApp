import React, { useState } from 'react'
import personIcon from '../../../assets/Desktop View/Icons/person.png'
import styles from './addPhoto.module.css'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'

const AddPhoto = () => {
  const [getImage, setGetImage] = useState(null)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (getImage) {
      dispatch(increaseCount())
    }
  }
  return (
    <div className={styles.formsStep2}>
      <h2 className={styles.heading}>Add Photo</h2>
      <p className={styles.photoDescription}>
        Add a photo so other members know who you are
      </p>
      <label
        className={getImage ? styles.photoContainer : styles.photoUploadWrapper}
        htmlFor="photo-upload">
        <img
          src={getImage ? URL.createObjectURL(getImage) : personIcon}
          className={styles.personIcon}
        />
      </label>
      <input
        type="file"
        accept="image/*"
        className={styles.uploadImg}
        id="photo-upload"
        onChange={e => setGetImage(e.target.files[0])}
        hidden
      />
      <div className={styles.upload}>
        <label className={styles.uploadBtn} onClick={handleClick} htmlFor={getImage ? '' : 'photo-upload'}>
          {getImage ? 'Continue' : 'Upload a photo'}
        </label>
        <p className={styles.skip} onClick={() => dispatch(increaseCount())}>
          Skip
        </p>
      </div>
    </div>
  )
}

export default AddPhoto
