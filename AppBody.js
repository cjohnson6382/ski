import React from 'react';
import { Image, Keyboard, Picker, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, WebView } from 'react-native';

export default class AppBody extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			thing: "default",
			text: "enter some text down there",
			switch: false,
			button: "button text",
			switchDisplay: "switched off"
		};
	}

	/*        <Text>Shake your phone to open the developer menu.</Text> */
	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Image style={styles.backgroundImage} source={ {uri: "http://i.imgur.com/xNmuUcf.jpg?1" } }>
					<ScrollView 
						keyboardDismissMode="on-drag"
						style={styles.container}
					>
						<View style={styles.transparentBackground}>
							<Text style={styles.text} >{ this.state.thing }</Text>
							<Text style={styles.text}>{ this.state.text }</Text>
							<Text style={styles.text}>{ this.state.button }</Text>
							<Text style={styles.text}>{ this.state.switchDisplay }</Text>
						</View>
						<Picker style={styles.transparentBackground} itemStyle={styles.text} selectedValue={ this.state.thing } onValueChange={(val, ind) => this.setState({ thing: val })} >
							<Picker.Item label="derp" value="derpy" />
							<Picker.Item label="wow" value="waoh" />
							<Picker.Item label="fancy" value="sofancy" />
						</Picker>
						<TextInput 
							style={[styles.text, styles.transparentBackground]}
							placeholder="enter some text" 
							placeholderTextColor="white"
							onChangeText={(text) => this.setState({ text: text }) }
							keyboardAppearance="dark"
							onSubmitEditing={ (event) => Keyboard.dismiss() }
							autoCorrect={ true }
						/>
						<Switch 
							style={styles.transparentBackground} 
							value={this.state.switch} 
							onValueChange={ 
								(value) => this.state.switch == true ? this.setState({ switch: false, switchDisplay: "switched off" }) : this.setState({ switch: true, switchDisplay: "switched on" }) 
							}
						/>
					</ScrollView>
					<TouchableOpacity 
						style={styles.buttonContainer}
						accessabilityLabel="submit this inspection to the server" 
						onPress={ (event) => { this.setState({ button: "inspection is submitted" }) } }
					>
						<Text style={[styles.button, styles.text]} >Submit Inspection</Text>
					</TouchableOpacity>
				</Image>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:7,
		padding: 10,
		borderRadius: 3
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
	button: {
		backgroundColor: "rgba(0,0,0,0.3)",
		justifyContent: "center",
		textAlign: "center",
		padding: 10
	},
	buttonContainer: {
		margin: 10
	}
});
