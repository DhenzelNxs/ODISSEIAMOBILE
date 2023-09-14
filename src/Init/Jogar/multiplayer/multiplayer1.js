import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import styles from "../../Init/style";
import * as Animatable from 'react-native-animatable';

function Multiplayer1() {

  

  return (
    <ImageBackground
      source={{ uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp' }}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Animatable.View
      animation="bounce"
      iterationCount="infinite"
      direction="alternate"
      duration={2000} // Duração de cada ciclo da animação em milissegundos
      
    >
    <Image 
      source={require("odisseiamob/assets/seta_dado.png")}
      resizeMode="contain"
      style={[styles.seta, { transform: [{ rotate: '270deg' }], bottom: 100, left: 75 }]}
    />
  </Animatable.View>

        <TouchableOpacity disabled={true}>
        <Image
          source={require("odisseiamob/assets/tabuleiro_novo_2.png")}
          resizeMode="contain"
          style={styles.imageTabuleiro}
        />
        </TouchableOpacity >
        <TouchableOpacity style={{right: 625}}>
          <Image 
            source={require("odisseiamob/assets/dadojogo2.png")}
            resizeMode="contain"
            style={styles.imgDado}
          />
        </TouchableOpacity>

        
      </View>
    </ImageBackground>
  );
}

export default Multiplayer1;
