import PagesHeader from '../../components/Headers/PagesHeader'
import Content from '../../components/Content/Content'
import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/footer'

import firstPageHeaderBg from '../../assets/images/сoffee-bg.jpg'
import firstPageImg from '../../assets/images/01.jpg'

const FirstPage = () => {
	return (
		<div className='headerBlock'>
			<PagesHeader bg={firstPageHeaderBg} />
			<Content img={firstPageImg} />
			<Catalog />
			<Footer />
		</div>
	)
}

export default FirstPage
