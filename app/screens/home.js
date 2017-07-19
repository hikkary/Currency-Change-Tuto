import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/container';
import { Logo } from '../components/logo';
import { InputWithButton } from '../components/textInput';
import { ClearButton } from '../components/buttons';
import { LastConverted } from '../components/text';
import { Header } from '../components/header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();


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

	handleSwapCurrency = () => {
		console.log('press Swap Currency');
	}

	handleOptionsPress = () => {
		console.log('pres Options');
	}
	render(){
		return(
				<Container>
					<StatusBar translucent={false} barStyle="light-content" />
					<Header onPress={this.handleOptionsPress}/>
					<KeyboardAvoidingView behavior="padding">
					<Logo/>
					<InputWithButton
						buttonText={TEMP_BASE_CURRENCY}
						onPress={this.handlePressBaseCurrency}
						defaultValue={TEMP_BASE_PRICE}
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
					<LastConverted
						base={TEMP_BASE_CURRENCY}
						quote={TEMP_QUOTE_CURRENCY}
						date={TEMP_CONVERSION_DATE}
						conversionRate={TEMP_CONVERSION_RATE}
					/>
					<ClearButton
						text="Reverse Currency"
						onPress={this.handleSwapCurrency}
					/>

				</KeyboardAvoidingView>
					<View />
				</Container>
		);
	}
}

export default Home;
