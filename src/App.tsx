import React from 'react';
import Footer from './components/Footer';
import Generate from './components/Generate';
import Header from './components/Header';
import './scss/app.min.css';

const App = () => {
	return (
		<div className='app'>
			<Footer />
			<Generate />
			<Header />
		</div>
	);
};

export default App;
