import React from "react";
import styles from "./BlogList.module.css";

function BlogList({ posts, loading }) {
	return (
		<>
			<div className={styles.bloglist_container}>
				{loading ? <h1 className={styles.loader}>Loading.....</h1> : null}
				<ul className={styles.bloglist}>
					{posts.map((post) => {
						return (
							<li className={styles.bloglist_item}>
								<div className={styles.bloglist_item__img}></div>
								<div className={styles.bloglist_item__text}>
									<h1>{post.title}</h1>
									{/* <p>{post.body}</p> */}
								</div>
								<div className={styles.bloglist_item__readmore}>
									<a href='#'>
										<div>
											<p>Read More</p>
										</div>
										<div>
											<i class='fa fa-arrow-right'></i>
										</div>
									</a>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default BlogList;
