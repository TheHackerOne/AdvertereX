import React from 'react';
import styles from './Blog.module.css';

const Blog = ({ title, description }) => {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__text}>
        <h2>{title}</h2>
        <p>{description}</p>
      <h2>Read More</h2>
      </div>
    </div>
  )
}

export default Blog
