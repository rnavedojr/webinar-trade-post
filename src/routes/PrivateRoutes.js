import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateLayout from '../components/layout/PrivateLayout';
import NotFound from '../pages/NotFound';
import PostTradesPage from '../pages/PostTradesPage';
import TradesViewPage from '../pages/TradesViewPage';
import LoginPage from '../pages/LoginPage';

const MainLayoutRoutes = () => {
	return (
		<PrivateLayout>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/control" element={<PostTradesPage />} />
				<Route path="/trades" element={<TradesViewPage />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</PrivateLayout>
	);
};

export default MainLayoutRoutes;
