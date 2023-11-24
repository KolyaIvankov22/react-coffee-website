import PagesHeader from '../../components/Headers/PagesHeader'
import Content from '../../components/Content/Content'
import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/footer'

import secondPageHeaderBg from '../../assets/images/coffee-pleasure.jpg'
import secondPageImg from '../../assets/images/02.jpg'

const SecondPage = () => {
	return (
		<div className='pleasure'>
			<PagesHeader bg={secondPageHeaderBg} />
			<Content img={secondPageImg} />
			<Catalog />
			<Footer />
		</div>
	)
}

export default SecondPage
