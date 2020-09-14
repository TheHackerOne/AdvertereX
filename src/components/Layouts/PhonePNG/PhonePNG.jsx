import React from 'react';
import styles from "./PhonePNG.module.css";
import PhoneInner from '../../../images/iphone_inner.png';
import PhoneOuter from '../../../images/iphone_outer.png';

function PhonePNG() {
  return (
		<div className={styles.phone_outer}>
			<div className={styles.phone_inner}>

				<div className={styles.phoneImg}>
					<div className={styles.phone_inner_img}>
						<img src={PhoneInner} alt='' />
					</div>
					<div className={styles.phone_outer_img}>
						<img src={PhoneOuter} alt='' />
					</div>
				</div>

				<div className={styles.phoneText}>
					<h1>Check out more content in instagram</h1>
					<button>Checkout</button>
				</div>

			</div>
		</div>
	);
}

export default PhonePNG
