import React, { useState, useEffect } from "react";
import { View, ImageBackground, Image, TouchableOpacity, Animated } from "react-native";
import styles from "../../Init/style";

function Multiplayer1() {
  const [positionX] = useState(new Animated.Value(0)); // Estado para controlar a posição horizontal

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(positionX, {
          toValue: 30, // Valor para mover a imagem para a direita
          duration: 1000, // Duração do movimento em milissegundos
          useNativeDriver: false, // Importante definir como false para animações de layout
        }),
        Animated.timing(positionX, {
          toValue: 0, // Valor para mover a imagem de volta para a esquerda (volta ao valor inicial)
          duration: 1000, // Duração do movimento em milissegundos
          useNativeDriver: false, // Importante definir como false para animações de layout
        }),
      ])
    ).start();
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp' }}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Animated.Image
          source={require("odisseiamob/assets/seta_dado.png")}
          resizeMode="contain"
          style={[
            styles.seta,
            {
              transform: [
                { rotate: '270deg' },
                { translateX: positionX }, // Aplicando a transformação apenas na posição horizontal (posição X)
              ],
              bottom: 100,
              left: 75,
            },
          ]}
        />

        <TouchableOpacity disabled={true}>
          <Image
            source={require("odisseiamob/assets/tabuleiro_novo_2.png")}
            resizeMode="contain"
            style={styles.imageTabuleiro}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ right: 625 }}>
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
