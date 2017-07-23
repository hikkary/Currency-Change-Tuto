import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/container';
import { Logo } from '../components/logo';
import { InputWithButton } from '../components/textInput';
import { ClearButton } from '../components/buttons';
import { LastConverted } from '../components/text';
import { Header } from '../components/header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies'


const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();


class Home extends Component {

	static propTypes = {
		navigation: PropTypes.object,
		dispatch: PropTypes.func,
		baseCurrency: PropTypes.string,
		quoteCurrency: PropTypes.string,
		amount: PropTypes.number,
		conversionRate: PropTypes.number,
		isFetching: PropTypes.bool,
		LastConvertedDate:  PropTypes.object,
	}

	handlePressBaseCurrency = () => {
		console.log('press base');
		this.props.navigation.navigate('CurrencyList', {title: 'Base Currency', type: 'base'})
	}

	handlePressQuoteCurrency = () => {
		console.log('press base');
		this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency', type: 'quote'})

	}

	handleTextChange = (amount) => {
		this.props.dispatch(changeCurrencyAmount(amount));
	}

	handleSwapCurrency = () => {
		console.log('press Swap Currency');
		this.props.dispatch(swapCurrency());
	}

	handleOptionsPress = () => {
		console.log('pres Options');
		this.props.navigation.navigate('Options')
	}
	render(){
		let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
		if (this.props.isFetching){
			quotePrice = '...';
		}
		return(

				<Container>
					<StatusBar translucent={false} barStyle="light-content" />
					<Header onPress={this.handleOptionsPress}/>
					<KeyboardAvoidingView behavior="padding">
					<Logo/>
					<InputWithButton
						buttonText={this.props.baseCurrency}
						onPress={this.handlePressBaseCurrency}
						defaultValue={this.props.amount.toString()}
						keyboardType="numeric"
						onChangeText={this.handleTextChange}
					/>

					<InputWithButton
						buttonText={this.props.quoteCurrency}
						onPress={this.handlePressQuoteCurrency}
						editable={false}
						default={this.props.amount}
						value={quotePrice}
					/>
					<LastConverted
						base={this.props.baseCurrency}
						quote={this.props.quoteCurrency}
						date={this.props.LastConvertedDate}
						conversionRate={this.props.conversionRate}
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

const mapStateToProps = (state) => {
	console.log(state);
	const baseCurrency = state.currencies.baseCurrency;
		const quoteCurrency = state.currencies.quoteCurrency;
		const conversionSelector = state.currencies.conversions[baseCurrency] || {};
		const rates = conversionSelector.rates || {};
		console.log(rates);
		console.log(conversionSelector);
		return {
			baseCurrency,
			quoteCurrency,
			amount: state.currencies.amount,
			conversionRate: rates[quoteCurrency] || 0,
			isFetching: conversionSelector.isFetching,
			LastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date,
		};
};

export default connect(mapStateToProps)(Home);
