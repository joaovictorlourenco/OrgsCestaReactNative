import React from 'react';
import { Text ,StyleSheet, Image, Dimensions, View } from 'react-native';

import top from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

function Cesta(){
	return(
		<>
			<Image style={styles.top} source={top} />
			<Text style={styles.title} >Detalhe da Cesta</Text>

			<View style={styles.container} >

				<Text style={styles.name} >Cesta de Verduras</Text>

				<View style={styles.Farm}>
					<Image style={styles.imgFarm} source={logo} />
					<Text style={styles.nameFarm} >Fazenda Feliz</Text>
				</View>

				<Text style={styles.description}>
					Uma Cesta Com Produtos Cuidadosamente Escolhidos
				da Fazenda pra sua Cozinha
				</Text>
				
				<Text style={styles.price}>R$ 40,00</Text>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,
    },

	title: {
		position: "absolute",
		color: "#FFFFFF",
		opacity: 0.7 ,
		fontSize: 20,
		lineHeight: 26,
		fontWeight: "bold",
		marginTop: 30,
		width: "100%",
		textAlign: "center",
	},

	name:{
		color: "#464646",
		fontSize: 26,
		lineHeight: 42,
		fontWeight: "bold",
	},

	Farm:{
		flexDirection: "row",
		paddingVertical: 12,	
	},

	nameFarm:{
		fontSize: 16,
		lineHeight: 26,
		marginLeft: 12,
	},

	imgFarm:{
		width: 32,
		height: 32,
	},

	description:{
		color: "#A4A4A4",
		fontSize: 16,
		lineHeight: 26,
	},

	price:{
		color: "#2A9F85",
		fontSize: 26,
		fontWeight: "bold",
	},

	container:{
		paddingHorizontal: 16,
		paddingVertical: 8,
	},

})

export default Cesta;
