// libs
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// routes
import routes from './routes';

// styles
import './app.css';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path={routes.HOME} element={<HomePage />} />
				<Route path={routes.NOT_FOUND_PAGE} element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;