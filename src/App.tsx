import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
