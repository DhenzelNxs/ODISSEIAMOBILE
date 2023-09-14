import React from "react";
import { View, ImageBackground, Image } from "react-native";
import styles from "../../Init/style";

function Multiplayer1() {
  return (
    <ImageBackground
      source={{ uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp' }}
      resizeMode="cover"
      style={styles.image}
    >
      <View>
        <Image
          source={require("odisseiamob/assets/tabuleiro_novo_2.png")}
          resizeMode="contain" // Defina o resizeMode aqui como "contain"
        />
      </View>
    </ImageBackground>
  );
}

export default Multiplayer1;
