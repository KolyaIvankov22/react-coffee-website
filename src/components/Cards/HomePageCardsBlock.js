import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomePageCards from './BlocksCards/HomePageCards'
import '../../style/Cards/HomePageCardsBlock.scss'

function HomePageCardsBlock() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('http://localhost:3004/catalog')
			.then(res => res.json())
			.then(data => {
				const firstThreeItems = data.slice(0, 3)
				setPosts(firstThreeItems)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div className='startPageBest'>
			<h3>Our best</h3>
			<div className='startPageBestCards'>
				{posts.map(item => (
					<Link to={`/singleBean/${item.id}`} key={item.id}>
						<HomePageCards
							key={item.id}
							name={item.name}
							image={item.image}
							price={item.price}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default HomePageCardsBlock
