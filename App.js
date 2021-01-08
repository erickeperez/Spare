import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Colors from './constants/Colors';
import Header from './components/Header';
import { enableScreens } from 'react-native-screens'

enableScreens();

const fetchFonts = () => {
	return Font.loadAsync({
		'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);
	if (!fontLoaded) {
		return (
    <AppLoading 
    startAsync={fetchFonts} 
    onFinish={() => setFontLoaded(true)}
    onError={console.warn} 
    />
    );
	}

	return (
		<View style={styles.screen}>
			<Header 
			title="Spare"
			style={styles.header}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	header: {
		color: Colors.tertiaryColor
	},
});
