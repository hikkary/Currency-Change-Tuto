import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem , Separator } from '../components/list'
import { connectAlert } from '../components/alert';

const ICON_PREFIX = Platform.os === 'ios' ? 'ios' : 'md'
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
	static propTypes = {
		navigation: PropTypes.object,
		alertWithType: PropTypes.func,
	}

	handleThemePress = () => {
		this.props.navigation.navigate('Themes');
	}

	handleSitePress = () => {
		Linking.openURL('htdddtp://fixer.io').catch(() => this.props.alertWithType('error', 'Sorry !', 'Fixer.io Cannot be opened right now'))
	}

	render(){
		return(
			<ScrollView>
				<StatusBar translucent={false} barStyle="default" />
				<ListItem
					text="Themes"
					onPress={this.handleThemePress}
					customIcon={
					<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
				}
				/>
				<Separator/>
				<ListItem
					text="Fixer.io"
					onPress={this.handleSitePress}
					customIcon={
						<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
					}
				/>
				<Separator/>

			</ScrollView>
		)
	}
}

export default connectAlert(Options);
