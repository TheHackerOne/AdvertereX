import React, { useState } from "react";
import styles from "./BlogPagination.module.css";

function BlogPagination({ posts, loading, postPerPage, pageUpdate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(posts.length / +postPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<>
			<ul className={styles.list_container}>
				{pageNumbers.map((number) => (
					<li key={number} className={styles.list_item}>
						<a href='#' onClick={() => pageUpdate(number)}>{number}</a>
					</li>
				))}
			</ul>
		</>
	);
}

export default BlogPagination;
