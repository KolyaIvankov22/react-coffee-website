import HomePageHeader from '../../components/Headers/HomePageHeader'
import HomePageInfo from '../../components/InfoBlock/HomePageInfo'
import HomePageCardsBlock from '../../components/Cards/HomePageCardsBlock'
import Footer from '../../components/Footer/footer'

const HomePage = () => {
	return (
		<div className='headerBlock'>
			<HomePageHeader />
			<HomePageInfo />
			<HomePageCardsBlock />
			<Footer />
		</div>
	)
}

export default HomePage
