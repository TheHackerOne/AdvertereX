import React from 'react';
import styles from "./WhatDoWeDo.module.css";

function WhatDoWeDo() {
  return (
		<div className={styles.what_we_do}>
			<div className={styles.what_we_do_inner}>
				<div className={styles.what_we_do_left_div}>
          <h1>What do we do?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet officia enim recusandae hic delectus dolor architecto labore! Voluptatum ullam sed architecto quasi sunt. Mollitia animi neque omnis aliquid iusto est beatae rem, commodi aperiam. Illo, recusandae quas, nulla quos voluptatum, molestiae accusantium aut rerum harum repellendus qui nesciunt. Modi, nam.</p>
        </div>
				<div className={styles.what_we_do_right_div}>
          <div className={styles.circle}></div>
        </div>
			</div>
		</div>
	);
}

export default WhatDoWeDo;
