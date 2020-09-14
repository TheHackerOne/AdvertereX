import React from 'react';
import Menu from '../Layouts/Menu/Menu';
import styles from './Homepage.module.css';
import Header from '../Layouts/Header/Header';
import Blogs from "../Layouts/Blogs/Blogs"
import WhatDoWeDo from '../Layouts/WhatDoWeDo/WhatDoWeDo';
import Banner from '../Layouts/Banner/Banner';
import PhonePNG from '../Layouts/PhonePNG/PhonePNG';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Header/>
      <Blogs/>
      <WhatDoWeDo/>
      <Banner/>
      <PhonePNG/>
    </div>
  )
}

export default HomePage;
