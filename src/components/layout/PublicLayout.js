import React from 'react';
import WebinarTradeHeader from './WebinarTradeHeader';
import Footer from './Footer';

const MainLayout = ({ children }) => {
	return (
		<div className="min-h-screen">
			<WebinarTradeHeader />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
