import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/container';
import { Logo } from '../components/logo';
import { InputWithButton } from '../components/textInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';


class Home extends Component {
	handlePressBaseCurrency = () => {
		console.log('press base');
	}

	handlePressQuoteCurrency = () => {
		console.log('press base');
	}

	handleTextChange = (text) => {
		console.log('change text', text);
	}
	render(){
		return(
				<Container>
					<StatusBar translucent={false} barStyle="light-content" />
					<Logo/>
					<InputWithButton
						buttonText={TEMP_BASE_CURRENCY}
						onPress={this.handlePressBaseCurrency}
						defaultValue``={TEMP_BASE_PRICE}
						keyboardType="numeric"
						onChangeText={this.handleTextChange}
					/>

					<InputWithButton
						buttonText={TEMP_QUOTE_CURRENCY}
						onPress={this.handlePressQuoteCurrency}
						editable={false}
						default={TEMP_BASE_PRICE}
						value={TEMP_QUOTE_PRICE}
					/>
					<View />
				</Container>
		);
	}
}

export default Home;
