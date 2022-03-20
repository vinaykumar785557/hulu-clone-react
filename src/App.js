import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import requests from './requests';
import Results from './Results';

function App() {
	const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

	return (
		<div className='app'>
			{/* Header */}
			<Header />

			{/* Nav */}
			<Nav setSelectedOption={setSelectedOption} />

			{/* Results */}
			<Results selectedOption={selectedOption} />
		</div>
	);
}

export default App;
