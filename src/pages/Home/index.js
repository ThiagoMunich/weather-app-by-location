import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import api, { key } from '../../services/api';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

export default function Home() {
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(true);
	const [weather, setWeather] = useState([]);
	const [background, setBackground] = useState(['#1ED6FF', '#97C1FF']);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();

			if (status !== 'granted') {
				setErrorMessage('Sem permissão, sem app!');
				setLoading(false);
				return;
			}

			let location = await Location.getCurrentPositionAsync();
			// console.log(location.coords);

			const response = await api.get(
				`weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`,
			);

			setWeather(response.data);

			if (response.data.results.currently === 'noite') setBackground(['#0C3741', '#0F2F61']);

			setLoading(false);
		})();
	}, []);

	if (loading) {
		return (
			<View style={styles.container}>
				<Text style={styles.carregandoDados}>Carregando dados...</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Menu />
			<Header background={background} weather={weather} />
			<Conditions weather={weather} />
			<FlatList
				horizontal
				data={weather.results.forecast}
				style={styles.list}
				keyExtractor={item => item.date}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => <Forecast data={item} />}
				contentContainerStyle={{ paddingBottom: '5%', paddingRight: '5%' }}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E8F0FF',
		paddingTop: '5%',
	},
	list: {
		marginTop: 10,
		marginLeft: 10,
	},
	carregandoDados: {
		fontSize: 17,
		fontStyle: 'italic',
	},
});
