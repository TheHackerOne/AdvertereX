import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList/BlogList";
import BlogPagination from "./BlogPagination/BlogPagination";

function BlogPage() {
	const [posts, setposts] = useState([]);
	const [loading, setloading] = useState(false);
	const [postPerPage, setpostPerPage] = useState(10);
	const [currentPage, setcurrentPage] = useState(1);

	useEffect(() => {
		// const res = await axios.get('/blog');
		const getBlogs = async () => {
			setloading(true);
			const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
			setloading(true);
			console.log(res.data);
			setposts(res.data);
			setloading(false);
		};
		getBlogs();
  }, []);
  
  const pageUpdate = (number) => {
    setcurrentPage(number);
  }

	const indexOfLastPost = postPerPage * currentPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<>
			<BlogList posts={currentPost} loading={loading} />
			<BlogPagination posts={posts} postPerPage={postPerPage} pageUpdate={pageUpdate}/>
		</>
	);
}

export default BlogPage;
