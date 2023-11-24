import { Link } from 'react-router-dom'

import '../style/Nav/nav.scss'

const Nav = props => {
	const { logo } = props
	return (
		<div className='navigation'>
			<nav className='nav'>
				<ul className='navList'>
					<li>
						<img src={logo} alt='logo' />
						<Link to='/'>Coffee house</Link>
					</li>
					<li>
						<Link to='/about'>Our coffee</Link>
					</li>
					<li>
						<Link to='/pleasure'>For your pleasure</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Nav
