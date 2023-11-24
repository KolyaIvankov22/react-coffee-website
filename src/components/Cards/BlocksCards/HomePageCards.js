import '../../../style/Cards/HomePageCards.scss'

const HomePageCards = ({ name, image, price }) => {
	return (
		<div className='startPageBestCard'>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>{price}</p>
		</div>
	)
}
export default HomePageCards
