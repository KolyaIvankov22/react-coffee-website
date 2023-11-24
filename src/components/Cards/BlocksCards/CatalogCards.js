import '../../../style/Cards/CatalogCards.scss'

const CatalogCards = ({ name, country, image, price }) => {
	return (
		<div className='catalogCards'>
			<img src={image} alt={name} />
			<h2>{name}</h2>
			<p>{country}</p>
			<p>{price}</p>
		</div>
	)
}

export default CatalogCards
