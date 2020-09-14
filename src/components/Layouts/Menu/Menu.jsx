import React from 'react';
import styles from './Menu.module.css';
import { NavLink} from 'react-router-dom';
import { useState } from 'react';
import { motion } from "framer-motion";

const Header = () => {

	const [dropDown, setdropDown] = useState(false);

	const toggleDropDown = () => {
		setdropDown(!dropDown);
	}

	const dropMenu = (
		<motion.ul
			className={styles.dropmenu}
			initial={{ y: "-100vh" }}
			animate={{ y: "0" }}
			transition={{ type: "tween" }}
		>
			<motion.li
				className={styles.dropmenu__item}
				initial={{ y: "-100vh" }}
				animate={{ y: "0" }}
				transition={{
					type: "tween",
					// damping: "10",
					// stiffness: "50",
					delay: 0.2,
				}}
			>
				<NavLink exact to='/about'>
					About us
				</NavLink>
			</motion.li>
			<motion.li
				className={styles.dropmenu__item}
				initial={{ y: "-100vh" }}
				animate={{ y: "0" }}
				transition={{
					type: "tween",
					// damping: "10",
					// stiffness: "50",
					delay: 0.4,
				}}
			>
				<NavLink exact to='/contact'>
					Contact us
				</NavLink>
			</motion.li>
			<motion.li
				className={styles.dropmenu__item}
				initial={{ y: "-100vh" }}
				animate={{ y: "0" }}
				transition={{
					type: "tween",
					// damping: "10",
					// stiffness: "50",
					delay: 0.6,
				}}
			>
				<NavLink exact to='/blog'>
					Blog
				</NavLink>
			</motion.li>
		</motion.ul>
	);

  return (
		<>
		<div className={styles.main_div}>
			<div className={styles.inner_div}>
				<div className={styles.logo}><NavLink exact to="/">LOGO</NavLink></div>
				<button className={styles.hamburger} onClick={toggleDropDown}>
					<div className={styles.hamburger__line}></div>
					<div className={styles.hamburger__line}></div>
					<div className={styles.hamburger__line}></div>
				</button>
				<ul className={styles.menu}>
					<li className={styles.link_wrapper}>
						<NavLink exact to='/about' activeClassName={styles.active}>
							About us
						</NavLink>
					</li>
					<li className={styles.link_wrapper}>
						<NavLink exact to='/contact' activeClassName={styles.active}>
							Contact us
						</NavLink>
					</li>
					<li className={styles.link_wrapper}>
						<NavLink exact to='/blog' activeClassName={styles.active}>
							Blog
						</NavLink>
					</li>
					<li>
						<button type='button'>AdvertereX</button>
					</li>
				</ul>
			</div>
		</div>
		{dropDown && dropMenu}
		</>
	);
}

export default Header;



