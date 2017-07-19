import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem , Separator } from '../components/list'

const ICON_PREFIX = Platform.os === 'ios' ? 'ios' : 'md'
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
	handleThemePress = () => {
		console.log('press theme');
	}

	handleSitePress = () => {
		console.log('Press Site');
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

export default Options;
