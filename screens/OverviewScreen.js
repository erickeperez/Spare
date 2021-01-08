import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const OverviewScreen = props => {
    <Text>
		This is the OverviewScreen.
	</Text>
};

OverviewScreen.navigationOptions = {
	headerTitle: 'Overview Screen',
};

const style = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default OverviewScreen;