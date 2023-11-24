import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CatalogCards from '../Cards/BlocksCards/CatalogCards'
import '../../style/Catalog/catalog.scss'

const Catalog = () => {
	const [filterName, setFilterName] = useState('')
	const [posts, setPosts] = useState([])
	const [filteredPosts, setFilteredPosts] = useState([])

	useEffect(() => {
		fetch('http://localhost:3005/catalog')
			.then(res => res.json())
			.then(data => {
				setPosts(data)
				setFilteredPosts(data.slice(3))
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	const handleFilterInput = event => {
		const filterName = event.target.value
		setFilterName(filterName)

		const filteredCards = posts.filter(card =>
			card.name.toLowerCase().includes(filterName.toLowerCase())
		)

		setFilteredPosts(filteredCards)
	}

	const handleFilterClick = country => {
		const filteredCountry = posts.filter(card =>
			country ? card.country === country : true
		)

		setFilteredPosts(filteredCountry)
	}

	return (
		<div className='catalog'>
			<div className='catalogInput'>
				<h3>Looking for</h3>
				<input
					type='text'
					placeholder='start typing here...'
					value={filterName}
					onChange={handleFilterInput}
				/>
				<h3>Or filter</h3>
				<button onClick={() => handleFilterClick('Brazil')}>Brazil</button>
				<button onClick={() => handleFilterClick('Kenya')}>Kenya</button>
				<button onClick={() => handleFilterClick('Columbia')}>Columbia</button>
			</div>
			<div className='catalogContainer'>
				{filteredPosts.map(item => (
					<Link to={`/singleBean/${item.id}`} key={item.id}>
						<CatalogCards
							key={item.id}
							name={item.name}
							image={item.image}
							country={item.country}
							price={item.price}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Catalog
