import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FirebaseContext } from '../context/firebase';
import AuthorizedBar from '../components/interface/AuthorizedBar';
import TradesList from '../components/interface/TradesList';

const TradesViewPage = () => {
	const { firebase } = useContext(FirebaseContext);

	return (
		<>
			<Helmet>
				<title>Webinar Trade Posts</title>
			</Helmet>
			<AuthorizedBar />
			<TradesList firebase={firebase} />
		</>
	);
};

export default TradesViewPage;
