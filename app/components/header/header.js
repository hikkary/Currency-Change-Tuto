import React from 'react';
import Proptypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
	<View style={styles.container}>
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Image style={styles.icon} resizeMode="contain" source={require('./images/gear.png')} />
		</TouchableOpacity>
	</View>
);

Header.propTypes = {
	onPress: Proptypes.func,
};

export default Header;
