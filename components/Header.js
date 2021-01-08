import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import TitleText from '../components/TitleText';


const Header = props => {
	return (
		<View style={styles.screen}>
			<TitleText style={styles.header}>Spare</TitleText>
			<Button 
			title="Overview"
			onPress={() => {
				props.navigation.navigate('OverviewScreen');
			}}
			/>
			<Button
			title="Resources"
			onPress={() => {

			}}
			/>
			<Button 
			title="Sign In"
			onPress={() => {

			}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		paddingLeft: 5,
		backgroundColor: Colors.primaryColor,
		alignItems: 'flex-start',
		justifyContent: 'space-between',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    },
});

export default Header;
