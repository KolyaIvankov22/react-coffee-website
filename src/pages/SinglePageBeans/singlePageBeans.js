import { useEffect, useState } from 'react'
import PagesHeader from '../../components/Headers/PagesHeader'
import Footer from '../../components/Footer/footer'
import { useParams } from 'react-router-dom'

import '../SinglePageBeans/singlePageBeans.scss'

import firstPageBackground from '../../assets/images/сoffee-bg.jpg'
import beansImg from '../../assets/images/about-beans.png'

const SinglePageBeans = () => {
	const { id } = useParams()
	const [coffeeCard, setCoffeeCard] = useState([])

	useEffect(() => {
		fetch('http://localhost:3005/catalog')
			.then(res => res.json())
			.then(data => {
				const filteredCoffee = data.filter(coffee => coffee.id === parseInt(id))
				setCoffeeCard(filteredCoffee)
			})
	}, [id])

	return (
		<div>
			<PagesHeader bg={firstPageBackground} />
			<div className='order'>
				<div className='orderContent'>
					{coffeeCard.map(item => (
						<img
							key={item.id}
							style={{ maxWidth: '400px' }}
							src={item.image}
							alt={item.name}
						/>
					))}
					<div className='orderInfo'>
						<h2>About our beans</h2>
						<img src={beansImg} alt={beansImg} />
						<View coffeeCard={coffeeCard} />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

const View = ({ coffeeCard }) => {
	return (
		<div>
			{coffeeCard.map(item => (
				<div key={item.id}>
					<p>{item.name}</p>
					<p>{item.description}</p>
					<p>{item.price}</p>
				</div>
			))}
		</div>
	)
}

export default SinglePageBeans
