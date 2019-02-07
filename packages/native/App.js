/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component, type Node} from 'react'
import {Platform, StyleSheet, Text, View, Button} from 'react-native'
import Test from 'test-component'
import styled from 'styled-components'
import test from './src'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
})


class Store {
	number = 0
}


const Title = styled.Text``

type
Props = {}
export default class App extends Component<Props> {
	store = new Store()

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Text style={styles.instructions}>{instructions}</Text>
				<Test clickableComponent={({onClick, children}: {onClick: () => any, children: string}) => <Button
					onPress={onClick} title={children}/>} numberElement={Text}/>
				<Title>{test}</Title>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
})
