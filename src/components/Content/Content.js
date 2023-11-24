import '../../style/Content/Content.scss'

import beansBlackLogo from '../../assets/images/about-beans.png'

const Content = ({ img }) => {
	return (
		<div className='beans'>
			<div className='beansContent'>
				<img src={img} alt={img} />
				<div className='aboutBeans'>
					<h2>About our beans</h2>
					<img src={beansBlackLogo} alt={beansBlackLogo} />
					<p>
						Extremity sweetness difficult behaviour he of. On disposal of as
						landlord horrible. <br /> <br /> Afraid at highly months do things
						on at. Situation recommend objection do intention so questions.
						<br /> As greatly removed calling pleased improve an. Last ask him
						cold feel <br />
						met spot shy want. Children me laughing we prospect answered
						followed. At it went is song that held help face.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Content
