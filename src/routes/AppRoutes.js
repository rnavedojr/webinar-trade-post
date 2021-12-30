import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayoutRoutes from './PublicLayoutRoutes';
import PrivateRoutes from './PrivateRoutes';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<PublicLayoutRoutes />} />
				<Route path="/admin/*" element={<PrivateRoutes />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
