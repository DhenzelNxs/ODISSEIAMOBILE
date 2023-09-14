import { Text, View , TouchableOpacity, ImageBackground} from "react-native";
import styles from "../Init/style";

import { useNavigation } from "@react-navigation/native";




function Jogar(){

    const navigation = useNavigation(); // Inicializa o hook de navegação

    const handleMultiplyer1Press = () => {
      navigation.navigate("multiplayer1"); // Navega para o componente Jogar
    };
    const handleMultiplyer2Press = () => {
        navigation.navigate("multiplayer2"); // Navega para o componente Jogar
      };
      const handleMultiplyer3Press = () => {
        navigation.navigate("multiplayer3"); // Navega para o componente Jogar
      };

    return(
        <ImageBackground
      source={{ uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp' }}
      resizeMode="cover"
      style={styles.image}
    >
        
        <View >
            <View style={{alignItems: "center", marginBottom: 50,}}>
                <Text style={{color: "#fff", fontSize: 30, fontStyle: "italic"}}>MULTIPLAYER</Text>
            </View>
            <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.opcaoEscolha} onPress={handleMultiplyer1Press}>
                <Text style={styles.textEscolha}>2 Jogadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcaoEscolha} onPress={handleMultiplyer2Press}>
                <Text style={styles.textEscolha}>3 Jogadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opcaoEscolha} onPress={handleMultiplyer3Press}>
                <Text style={styles.textEscolha}>4 Jogadores</Text>
            </TouchableOpacity>
            </View>
        </View>
        
    </ImageBackground>
    )
}

export default Jogar