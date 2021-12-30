import React, { useState, useEffect } from 'react';
import { uid } from 'uid/secure';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ loginUser, userExists }) => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		name: '',
		email: '',
		id: '',
	});

	useEffect(() => {
		if (userExists()) {
			navigate('/admin/trades');
		}
	}, [userExists, navigate]);

	const handleInputChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmitForm = e => {
		e.preventDefault();
		const { name, email } = user;
		console.log(name, email);
		if (
			name === process.env.REACT_APP_AUTH_USER_NAME_01 &&
			email === process.env.REACT_APP_AUTH_USER_EMAIL_01
		) {
			user.id = uid();
			loginUser(user.id, name, email);
			navigate('/admin/control');
		} else {
			return alert('Invalid credentials.');
		}
	};

	return (
		<form
			onSubmit={handleSubmitForm}
			className="text-white w-full md:w-3/5 mx-auto my-10 border border-2 border-black rounded-lg p-4 bg-blue-800"
		>
			<div className="flex flex-col mb-4">
				<label htmlFor="name">Full Name</label>
				<input
					className="border border-2 border-black p-2 text-black"
					type="text"
					id="name"
					name="name"
					placeholder="Your full name"
					onChange={handleInputChange}
					value={user.name}
				/>
			</div>
			<div className="flex flex-col mb-4">
				<label htmlFor="email">Your email</label>
				<input
					className="border border-2 border-black p-2 text-black"
					type="text"
					id="email"
					name="email"
					placeholder="Your work email"
					onChange={handleInputChange}
					value={user.email}
				/>
			</div>
			<div className="mt-6 w-full">
				<input
					className="
        cursor-pointer bg-green-800 text-white font-bold uppercase p-2 rounded-md w-full 
        hover:bg-white hover:text-green-800 hover:border-green-800 hover:border-2 transition-all
      "
					type="submit"
					value="Login to control center"
				/>
			</div>
		</form>
	);
};

export default LoginForm;
