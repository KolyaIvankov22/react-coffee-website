import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import FirstPage from './pages/Page1/FirstPage'
import SecondPage from './pages/Page2/SecondPage'
import SinglePageBeans from './pages/SinglePageBeans/singlePageBeans'

import '../src/app.css'

const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<FirstPage />} />
				<Route path='/pleasure' element={<SecondPage />} />
				<Route path='/singleBean/:id' element={<SinglePageBeans />} />
			</Routes>
		</div>
	)
}

export default App
