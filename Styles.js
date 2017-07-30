import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		flex:7,
		margin: 10,
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