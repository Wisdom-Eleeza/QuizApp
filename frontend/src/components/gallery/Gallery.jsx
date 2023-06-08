import React from 'react'
import styles from './gallery.module.css'
import person1 from '../../assets/Desktop View/Images/06b1d343-fa7c-4dd1-b8a9-1f04437b6ac5 1.png'
import pattern from '../../assets/Desktop View/Images/Group 427318875.png'
import person2 from '../../assets/Desktop View/Images/wepik-export-20230509105334DQz8 1.png'
import person3 from '../../assets/Desktop View/Images/wepik-export-20230509105834XND0 1.png'
import person4 from '../../assets/Desktop View/Images/wepik-export-20230509113806sxOa 1.png'

const Gallery = () => {
  return (
    <div className={styles.gallery}>
        <img src={pattern} className={styles.pattern}/>
        <div className={styles.personImg}>
          <img src={person1} className={styles.person}/>
        </div>
      </div>
  )
}

export default Gallery
