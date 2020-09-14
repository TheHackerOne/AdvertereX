import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.left_div}>
        <h1>Header for the hero</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos placeat hic, illo harum exercitationem laborum eaque unde temporibus accusantium numquam autem ipsam quia facilis voluptatem minima rem quibusdam amet veritatis? Porro ullam odit nesciunt possimus ducimus et quia tempor.</p>
        <button type="button">Advertere X</button>
      </div>
      <div className={styles.right_div}>
        <div className={styles.image_circle}></div>
      </div>
    </div>
  )
}

export default Header

