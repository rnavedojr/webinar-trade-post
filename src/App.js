import React from 'react';
import { AuthProvider } from './context/auth';
import { FirebaseProvider } from './context/firebase';
import { UIProvider } from './context/ui';
import AppRoutes from './routes/AppRoutes';

function App() {
	return (
		<AuthProvider>
			<FirebaseProvider>
				<UIProvider>
					<AppRoutes />
				</UIProvider>
			</FirebaseProvider>
		</AuthProvider>
	);
}

export default App;
