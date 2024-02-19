import React from 'react';
import './Home.css';

import Header from '../components/Main/Main';
import Main from '../components/Header/Header';

function Home() {
	const [config, setConfig] = React.useState(null);

	return (
		<>
			<Header config={config} setConfig={setConfig} />
			<Main config={config} setConfig={setConfig} />
		</>
	);
}

export default Home;