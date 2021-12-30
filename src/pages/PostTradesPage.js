import React from // useContext,
// useState
'react';
import AuthorizedBar from '../components/interface/AuthorizedBar';
// import { FirebaseContext } from '../context/firebase';
import { Helmet } from 'react-helmet';
import PostTradesForm from '../components/forms/PostTradesForm';

const ControlCenter = () => {
	// const { firebase } = useContext(FirebaseContext);

	// const [showButton, setShowButton] = useState(true);

	// const handleShowForm = async () => {
	// 	setShowButton(() => !showButton);
	// 	const valueData = firebase.db
	// 		.collection('FormToggle')
	// 		.doc('eWDMi2FHYS2jcr7WmC7F');
	// 	valueData.get().then(doc => {
	// 		if (doc.exists) {
	// 			// to know the current value
	// 			// const previousValue = doc.data().showForm
	// 			valueData.update({ showForm: true });
	// 		}
	// 	});
	// };

	// const handleHideForm = () => {
	// 	setShowButton(() => !showButton);
	// 	const valueData = firebase.db
	// 		.collection('FormToggle')
	// 		.doc('eWDMi2FHYS2jcr7WmC7F');
	// 	valueData.get().then(doc => {
	// 		if (doc.exists) {
	// 			// to know the current value
	// 			// const previousValue = doc.data().showForm
	// 			valueData.update({ showForm: false });
	// 		}
	// 	});
	// };

	return (
		<>
			<Helmet>
				<title>Webinar Trade Control Center</title>
			</Helmet>
			<AuthorizedBar />
			<div className="container mx-auto">
				{/* <div className="flex flex-col items-center justify-center">
					{showButton ? (
						<>
							<p>
								The form is hidden in the page, click the button above to show
								it.
							</p>
							<button
								className="bg-green-800 text-white p-4 rounded uppercase font-bold mt-4"
								onClick={handleShowForm}
							>
								Show from
							</button>
						</>
					) : (
						<>
							<p>
								The form is showing in the page, click the button below to hide
								it.
							</p>
							<button
								className="bg-red-800 text-white p-4 rounded uppercase font-bold mt-4"
								onClick={handleHideForm}
							>
								Hide Form
							</button>
						</>
					)}
				</div> */}
				<PostTradesForm />
			</div>
		</>
	);
};

export default ControlCenter;
