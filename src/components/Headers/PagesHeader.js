import Nav from '../../navigation/nav'

import '../../style/Headers/PagesHeader.scss'

import logo from '../../assets/images/logo.png'

const PagesHeader = ({ bg }) => {
	const headerStyle = {
		backgroundImage: `url(${bg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	}

	return (
		<div className='header' style={headerStyle}>
			<Nav logo={logo} />
			<div className='headerText'>
				<h1>Our Coffee</h1>
			</div>
		</div>
	)
}

export default PagesHeader
