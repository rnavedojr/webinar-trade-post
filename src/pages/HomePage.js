import React, { useEffect, useContext, useState } from 'react';
import PostTradesForm from '../components/forms/PostTradesForm';
import MockupVideo from '../components/interface/MockupVideo';
import { FirebaseContext } from '../context/firebase';
// import WebinarTradePreview from "../components/WebinarTradePreview";

const Home = () => {
	const { firebase } = useContext(FirebaseContext);
	const [showForm, setShowForm] = useState(false);
	// const [showTradePreview, setShowTradePreview] = useState(false)

	useEffect(() => {
		// get the FormToggle value
		const getToggleData = () => {
			firebase.db.collection('FormToggle').onSnapshot(handleSnapshot);
		};
		const handleSnapshot = snapshot => {
			const dataValue = snapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() };
			});
			// set the current value from db
			setShowForm(dataValue[0].showForm);
		};

		getToggleData();

		// update the form visibility based on value true or false
		if (showForm) {
			getToggleData();
		} else if (!showForm) {
			getToggleData();
		}
	}, [showForm, firebase]);

	return (
		<div className="p-2">
			<MockupVideo />
			<div className="container mx-auto flex">
				{showForm ? <PostTradesForm /> : null}
				{/* {
          showTradePreview
          && (
            <WebinarTradePreview />
          )
        } */}
			</div>
		</div>
	);
};

export default Home;
