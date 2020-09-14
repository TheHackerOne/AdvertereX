import React from "react";
import styles from "./Banner.module.css";

function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.banner_item}>
				<h1>ICON</h1>
				<h1>Events</h1>
			</div>
			<div className={styles.banner_item}>
				<h1>ICON</h1>
				<h1>Sessions & Seminars</h1>
			</div>
			<div className={styles.banner_item}>
				<h1>ICON</h1>
				<h1>Group Discussion</h1>
			</div>
			<div className={styles.banner_item}>
				<h1>ICON</h1>
				<h1>Social Media Marketing</h1>
			</div>
			<div className={styles.banner_item}>
				<h1>ICON</h1>
				<h1>Content Creation & Strategy</h1>
			</div>
		</div>
	);
}

export default Banner;
