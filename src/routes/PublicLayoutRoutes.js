import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../components/layout/PublicLayout';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import TradeClientSubmitSuccessPage from '../pages/TradeClientSubmitSuccessPage';

const MainLayoutRoutes = () => {
	return (
		<PublicLayout>
			<Routes>
				<Route path="/webinar-room" element={<HomePage />} />
				<Route path="/success" element={<TradeClientSubmitSuccessPage />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</PublicLayout>
	);
};

export default MainLayoutRoutes;
