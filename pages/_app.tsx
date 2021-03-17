import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/compiled.css';
import { Provider } from 'react-redux';
import { store } from '../store';
import AppWrapper from '../components/AppWrapper';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<AppWrapper>
				<Component {...pageProps} />
			</AppWrapper>
		</Provider>
	);
};

export default App;
