import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const forecast = [
	{
		date: '11/03',
		max: 30,
		min: 17,
		condition: 'storm',
	},
	{
		date: '12/03',
		max: 33,
		min: 15,
		condition: 'cloud',
	},
	{
		date: '13/03',
		max: 32,
		min: 18,
		condition: 'rain',
	},
	{
		date: '14/03',
		max: 32,
		min: 17,
		condition: 'cloud',
	},
	{
		date: '15/03',
		max: 32,
		min: 24,
		condition: 'storm',
	},
	{
		date: '16/03',
		max: 40,
		min: 11,
		condition: 'clear_day',
	},
	{
		date: '17/03',
		max: 37,
		min: 19,
		condition: 'clear_day',
	},
	{
		date: '18/03',
		max: 35,
		min: 12,
		condition: 'storm',
	},
	{
		date: '19/03',
		max: 39,
		min: 22,
		condition: 'rain',
	},
	{
		date: '20/03',
		max: 30,
		min: 9,
		condition: 'cloud',
	},
];

export default function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<Menu />
			<Header />
			<Conditions />
			<FlatList
				horizontal
				data={forecast}
				style={styles.list}
				keyExtractor={item => item.date}
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
});
