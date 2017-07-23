import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes'
import { AlertProvider } from './components/alert';
import store from './config/store';

EStyleSheet.build({
	$primaryOrange: '#D57A66',
	$primaryGreen: '#00BD9D',
	$primaryPurple: '#9A768F',

	$primaryBlue: '#4F6D7A',
	$white: '#ffffff',
	$border: '#E2E2E2',
	$inputText: '#797979',
	$lightGray: '#f0f0f0',
	$darkText: '#343434',
});
export default () => (
	<Provider store={store}>
	<AlertProvider>
		<Navigator onNavigationStateChange={null}/>
	</AlertProvider>
 </Provider>
);
