import React from 'react';
import Blog from '../Blogs/Blog/Blog';
import styles from "./Blogs.module.css";
import { useState } from 'react';
import { useEffect } from 'react';


const Blogs = () => {

	const [move, setmove] = useState('-154') ;
	const [left, setleft] = useState(false) ;
	const [right, setright] = useState(false) ;

	useEffect(() => {
		if (+move === 0) setright(true);
		if (+move !== 0) setright(false);
		if (+move === -352) setleft(true);
		if (+move !== -352) setleft(false);
	})


	const moveleft = () => {
		setmove(`${+move-22}`);
		console.log(move)
		console.log(right)
	}
	
	const moveright = () => {
		setmove(`${+move+22}`);
		console.log(move)
		console.log(left)
	}

  const blogs = [
		{	
			id:'1',
			title: "how to get rich quick",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'2',
			title: "how to become a millionaire",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'3',
			title: "how to become a begger",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'4',
			title: "how to become a god",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'5',
			title: "how to become a trillionaire",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'6',
			title: "how to become a dfvdfv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'7',
			title: "how to become a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'8',
			title: "how to becomdfvdfe a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'9',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'10',
			title: "how to besdvvcome a fdv 10th post",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'11',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'12',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'13',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'14',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'15',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'16',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'17',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'18',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'19',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
		{
			id:'20',
			title: "how to besdvvcome a fdv",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex inventore dolorem repellat molestiae rem unde vitae exercitationem quo quaerat!",
		},
	];

  return (
		<>
			<div className='carousel col'>
				<div className='carousel_btn'>
					<button className='prev_btn' disabled={right} onClick={() => moveright()}>
						<i className='fa fa-arrow-left fa-5x'></i>
					</button>
					<button className='next_btn' disabled={left} onClick={() => moveleft()}>
						<i className='fa fa-arrow-right fa-5x'></i>
					</button>
				</div>
				<div className='blog_outer'>
					<div
						className='blog_inner'
						style={{
							transform: `translateX(${move - 22}vw)`,
						}}
					>
						{blogs.map((blog) => (
							<Blog
								title={blog.title}
								key={blog.id}
								description={blog.description}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Blogs

{/* <button><i className='fa fa-arrow-right fa-5x'></i></button> */}