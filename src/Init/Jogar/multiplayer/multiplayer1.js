import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import styles from "../../Init/style";

function Multiplayer1() {

  

  return (
    <ImageBackground
      source={{ uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp' }}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
