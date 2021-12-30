import React, { useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

const AuthorizedBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { auth, userExists, logoutUser } = useContext(AuthContext);

	useEffect(() => {
		if (!auth.logged) {
			return navigate('/admin/login');
		}
	}, [auth, userExists, navigate]);

	const matchPath = pathname => {
		if (location.pathname === pathname) return true;
	};

	return (
		<>
			<div className="border-t border-blue-100 bg-black px-4 py-2">
				<div className="flex items-center justify-between container mx-auto uppercase">
					<div>
						<Link
							className={`${
								matchPath('/admin/trades') ? 'text-white' : 'text-gray-400'
							} mr-6`}
							to="/admin/trades"
						>
							<i className="mr-2 fas fa-chart-line"></i>Trades
						</Link>
						<Link
							className={`${
								matchPath('/admin/control') ? 'text-white' : 'text-gray-400'
							}`}
							to="/admin/control"
						>
							<span>
								<i className="mr-2 fas fa-plus"></i>New
							</span>
						</Link>
					</div>
					<div>
						<span className="text-white mr-4">{auth.name}</span>
						<button
							className="text-red-400 uppercase font-bold"
							onClick={logoutUser}
						>
							Sign out
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthorizedBar;
