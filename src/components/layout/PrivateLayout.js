import React from 'react';
import WebinarTradeHeader from './WebinarTradeHeader';

const AuthLayout = ({ children }) => {
	return (
		<div className="min-h-screen">
			<WebinarTradeHeader />
			{children}
		</div>
	);
};

export default AuthLayout;
