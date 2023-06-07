import React from 'react'
import styles from './gallery.module.css'
import person from '../../assets/Desktop View/Images/06b1d343-fa7c-4dd1-b8a9-1f04437b6ac5 1.png'
import pattern from '../../assets/Desktop View/Images/Group 427318875.png'

const Gallery = () => {
  return (
    <div className={styles.gallery}>
        <img src={pattern} className={styles.pattern}/>
        <div className={styles.personImg}>
          <img src={person} className={styles.person}/>
        </div>
      </div>
  )
}

export default Gallery
