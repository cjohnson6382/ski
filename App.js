import React from 'react';
import { Image, Keyboard, Picker, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableWithoutFeedback, View, WebView } from 'react-native';

export default class App extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			thing: "default",
			text: "enter some text down there",
			switch: false
		};
	}

	/*        <Text>Shake your phone to open the developer menu.</Text> */
	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
				<Image style={styles.backgroundImage} source={ {uri: "http://i.imgur.com/xNmuUcf.jpg?1" } }>
					<ScrollView style={styles.container}>
						<View style={styles.transparentBackground}>
							<Text style={styles.text} >Open up App.js to start working on your app!</Text>
							<Text style={styles.text} >Changes you make will automatically reload.</Text>
							<Text style={styles.text} >{ this.state.thing }</Text>
							<Text style={styles.text}>{ this.state.text }</Text>
						</View>
						<Picker style={styles.transparentBackground} itemStyle={styles.text} selectedValue={ this.state.thing } onValueChange={(val, ind) => this.setState({ thing: val })} >
							<Picker.Item label="derp" value="derpy" />
							<Picker.Item label="wow" value="waoh" />
							<Picker.Item label="fancy" value="sofancy" />
						</Picker>
						<TextInput 
							style={styles.transparentBackground}
							placeholder="enter some text" 
							placeholderTextColor="white"
							onChangeText={(text) => this.setState({ text: text }) }
							keyboardAppearance="dark"
							onSubmitEditing={ (event) => Keyboard.dismiss() }
							autoCorrect={ true }
						/>
						<Switch style={styles.transparentBackground} value={this.state.switch} onValueChange={ (value) => this.state.switch == true ? this.setState({ switch: false }) : this.setState({ switch: true }) }/>
					</ScrollView>
					</Image>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	touchable: {
		flex: 1,
		zIndex: 2
	},
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	backgroundImage: {
		zIndex: 1,
		resizeMode: "cover",
		flex: 1
	},
	picker: {
		backgroundColor: "rgba(255,255,255,0.3)"
	},
	transparentBackground: {
		backgroundColor: "rgba(0,0,0,0.3)",
		padding: 15,
		margin: 15
	},
	text: {
		fontWeight: "bold",
		color: "white"
	},
});
