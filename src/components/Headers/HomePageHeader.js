import { Link } from 'react-router-dom'

import Nav from '../../navigation/nav'

import '../../style/Headers/HomePageHeader.scss'

import logo from '../../assets/images/logo.png'
import beansWhiteLogo from '../../assets/svg/beans-logo.svg'

const HomePageHeader = () => {
	return (
		<div className='startPage'>
			<Nav logo={logo} />
			<div className='startPageTitle'>
				<h1>Everything You Love About Coffee</h1>
				<img src={beansWhiteLogo} alt={beansWhiteLogo} />
				<p>We makes every day full of energy and taste</p>
				<p>Want to try our beans?</p>
				<Link to='/about'>
					<button>More</button>
				</Link>
			</div>
		</div>
	)
}

export default HomePageHeader
