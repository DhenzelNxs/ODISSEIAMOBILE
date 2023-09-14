import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Alert, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importa o hook de navegação

import styles from "./style";

const OptionsMain = () => {
  const navigation = useNavigation(); // Inicializa o hook de navegação

  const handleJogarPress = () => {
    navigation.navigate("Jogar"); // Navega para o componente Jogar
  };

  const handleOpcoesPress = () => {
    navigation.navigate("Opcoes"); // Navega para o componente Opções
  };

  const handleCreditosPress = () => {
    navigation.navigate("Creditos"); // Navega para o componente Créditos
  };

  const handleSairPress = () => {
    // Exibe um alerta de confirmação
    Alert.alert(
      "Sair do jogo",
      "Você realmente deseja sair do jogo?",
      [
        {
          text: "Não",
          style: "cancel", // Estilo do botão "Não" (pode ser "default" também)
        },
        {
          text: "Sim",
          onPress: () => {
            // Fecha o aplicativo (isso pode variar dependendo da plataforma)
            // Aqui, estamos usando o método `BackHandler.exitApp` do React Native
            // Certifique-se de importar o BackHandler no início do seu arquivo
            // import { BackHandler } from "react-native";
            BackHandler.exitApp();
          },
        },
      ],
      { cancelable: false } // Impede que o usuário feche o alerta tocando fora dele
    );
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp' }}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.OptionsAll}>
        <Text style={styles.TitleText}>ODISSEIA INTERESTELAR</Text>
        <TouchableOpacity style={styles.InputButtonJogar} onPress={handleJogarPress}>
          <Text style={styles.TextInputJogar}>Jogar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InputButtonOpcao} onPress={handleOpcoesPress}>
          <Text style={styles.TextInputOpcao}>Opções</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InputButtonCreditos} onPress={handleCreditosPress}>
          <Text style={styles.TextInputCredits}>Créditos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exitButton} onPress={handleSairPress}>
          <Text style={{color:"#fff", fontSize:20}}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default OptionsMain;
