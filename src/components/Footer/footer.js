import { Link } from 'react-router-dom'

import '../../style/Footer/footer.scss'

import logoBlack from '../../assets/images/logo-black.png'
import beansBlackLogo from '../../assets/images/about-beans.png'

const Footer = () => {
	return (
		<div className='footer'>
			<nav className='footerNav'>
				<ul className='footerNavList'>
					<li>
						<img src={logoBlack} alt={logoBlack} />
						<Link to='/'>Coffee house</Link>
					</li>
					<li>
						<Link to='/about'>Our coffee</Link>
					</li>
					<li>
						<Link to='/pleasure'>For your pleasure</Link>
					</li>
				</ul>
				<img className='footerImg' src={beansBlackLogo} alt={beansBlackLogo} />
			</nav>
		</div>
	)
}

export default Footer
