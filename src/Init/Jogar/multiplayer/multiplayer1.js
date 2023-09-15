import React, { useState, useEffect } from "react";
import { View, ImageBackground, Image, TouchableOpacity, Animated, Text, Modal, TextInput, Alert } from "react-native";

import styles from "../../Init/style";



function Multiplayer1() {
  const [positionX] = useState(new Animated.Value(0)); // Estado para controlar a posição horizontal
  const [navePositionX1, setNavePositionX1] = useState(0)
  const [navePositionY1, setNavePositionY1] = useState(0)

  const [navePositionX2, setNavePositionX2] = useState(0)
  const [navePositionY2, setNavePositionY2] = useState(0)

  const [casaAtual1, setCasaAtual1] = useState(0)
  const [casaAtual2, setCasaAtual2] = useState(0)
  const [numeroDado, setNumeroDado] = useState(0)
  const [jogadorAtual, setJogadorAtual] = useState(1)

  const [showCard, setShowCard] = useState(false);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [showResultMessage, setShowResultMessage] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  
  const [showRandomNumber, setShowRandomNumber] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [showInitialScreen, setShowInitialScreen] = useState(true);


  function handleStartGame() {
    // Verifique se os nomes dos jogadores foram inseridos
    if (player1Name && player2Name) {
      // Inicie o jogo e oculte a tela inicial
      setShowInitialScreen(false);
    } else {
      // Exiba uma mensagem de erro se os nomes não foram inseridos
      Alert.alert("Nomes dos jogadores", "Por favor, insira os nomes dos jogadores.");
    }
  }
  


  useEffect(() => {
    startAnimation();
  }, []);

  function DefinirPosition(numeroDado, casaAtual){
    const navePositions = [
         [50, -10],[95, -50],[120, -100],[160, -130],[180, -100],
         [160, -60], [160, -20],[210, -10],[250, -25],[280, -60],[290, -100],
         [290, -140],[265, -170], [220, -180],[175, -180],[125, -175],
         [85, -145],[50, -110],[15, -130],[14, -180],[15, -225],
         [25, -270],[60, -305],[170, -305],[110, -270],[110, -230],
         [150, -215],[185, -240],[200, -285],[250, -315],[290, -300],
         [265, -260],[285, -220],[330, -240],[345, -290],[390, -310],
         [440, -310],[490, -290],[490, -240],[450, -230],[410, -230],
         [370, -210],[345, -165],[340, -125],[335, -80],[335, -40],[370, -15],
         [430, -13],[465, -35],[465, -70],
        ]  
    

        return [navePositions[(numeroDado + casaAtual) - 1][0], navePositions[(numeroDado + casaAtual) - 1][1]]
}

  function moverNave(){
    
    
    
    if (jogadorAtual === 1){ 
      let newPositions = DefinirPosition(numeroDado, casaAtual1)
      setCasaAtual1(numeroDado + casaAtual1)
    setNavePositionX1(newPositions[0])
    setNavePositionY1(newPositions[1])
    console.log(numeroDado)
    console.log(newPositions)
    }else{
      let newPositions = DefinirPosition(numeroDado, casaAtual2)
      setCasaAtual2(numeroDado + casaAtual2)
      setNavePositionX2(newPositions[0])
      setNavePositionY2(newPositions[1])
      console.log(numeroDado)
    console.log(newPositions)
    }
  }

  function showQuestionCard() {
    // Gere um número aleatório entre 1 e 6 para simular o dado
    let numeroDado = Math.floor(Math.random() * (6 - 1) + 1)
    setNumeroDado(numeroDado)
    setRandomNumber(numeroDado);
    setShowRandomNumber(true);
  
    // Espere por alguns segundos (por exemplo, 2 segundos) antes de mostrar o card da pergunta
    setTimeout(() => {
      setShowRandomNumber(false); // Esconde o número sorteado
  
      // Em seguida, após o tempo de espera, mostre o card da pergunta
      setTimeout(() => {
        const randomQuestion = "Qual Planeta está mais próximo do sol ?";
        const randomOptions = ["Terra", "Mercúrio", "Marte", "Jupiter"];
  
        setQuestion(randomQuestion);
        setOptions(randomOptions);
        setShowCard(true); // Mostra o card da pergunta
      }); // Tempo adicional de espera antes de mostrar o card
    }, 3000); // Tempo de espera inicial para mostrar o número sorteado
  }
  
  
  

  function handleOptionClick(selectedOption) {
    // Aqui você pode adicionar a lógica para verificar se a opção selecionada está correta
    // Substitua o exemplo abaixo pela sua lógica real
    const isCorrect = selectedOption === "Mercúrio";
  
    if (isCorrect) {
      moverNave(); // Chame a função para mover a nave
      setResultMessage("Você acertou!");
      if (jogadorAtual === 1){
        setJogadorAtual(2)
      }else{
        setJogadorAtual(1)
      }
      console.log(jogadorAtual)
    } else {
      setResultMessage("Você errou!");
      if (jogadorAtual === 1){
        setJogadorAtual(2)
      }else{
        setJogadorAtual(1)
      }
      console.log(jogadorAtual)
    }
  
    setShowResultMessage(true); // Exiba a mensagem de resultado
    setShowCard(false); // Feche o card
  
    // Configure um tempo limite para esconder a mensagem após alguns segundos (por exemplo, 3 segundos)
    setTimeout(() => {
      setShowResultMessage(false);
    }, 2000);
  }
  
  
  


  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(positionX, {
          toValue: 30, 
          duration: 1000, 
          useNativeDriver: false, 
        }),
        Animated.timing(positionX, {
          toValue: 0, 
          duration: 1000, 
          useNativeDriver: false, 
        }),
      ])
    ).start();
  };


  if (showInitialScreen) {
    return (
      
        <ImageBackground
          source={{
            uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp',
          }}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.initialScreenContainer}>
            <View style={{flexDirection: "column"}}>
            <Image
              source={require("odisseiamob/assets/Nave1.png")}
              resizeMode="contain"
              style={styles.Naves1initial}
            />
           
            <Image
              source={require("odisseiamob/assets/pato2.png")}
              resizeMode="contain"
              style={styles.Naves2initial}
            />
            
            </View>
            <View style={{flexDirection: "column"}}>
            <TextInput
                placeholder="Nome do Jogador 1"
                style={[styles.input, {marginBottom: 40}]}
                value={player1Name}
                onChangeText={(text) => setPlayer1Name(text)}
                placeholderTextColor={"#fff"}
              />

            <TextInput
                placeholder="Nome do Jogador 2"
                style={[styles.input, {marginBottom: 40}]}
                value={player2Name}
                onChangeText={(text) => setPlayer2Name(text)}
                placeholderTextColor={"#fff"}
              />
            </View>
           

          </View>

          <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleStartGame()}
            >
              <Text style={styles.startButtonText}>Iniciar Jogo</Text>
            </TouchableOpacity>
        </ImageBackground>
      );
      
  } else {
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
              left: 85,
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
        <TouchableOpacity style={{ right: 625 }} onPress={showQuestionCard}>
        <Image
          source={require("odisseiamob/assets/dadojogo2.png")}
          resizeMode="contain"
          style={styles.imgDado}
        />
      </TouchableOpacity>

      {/* Adicione o Modal para exibir o card */}
      <Modal
        visible={showCard}
        animationType="fade"
        transparent={true}
        
      >
        
        <View style={styles.modalContainer}>
          <View style={styles.card}>
            <Text style={styles.questionText}>{question}</Text>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleOptionClick(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            
            
          </View>
          
        </View>
        
      </Modal>
      {showResultMessage && (
      <View style={styles.resultMessageContainer}>
        <Text style={styles.resultMessageText}>{resultMessage}</Text>
      </View>
    )}

  {showRandomNumber && (
   
    <View style={styles.randomNumberContainer}>
      <Text style={{color: "#fff", fontSize: 48}}>Vez do Jogador {jogadorAtual}</Text>
      <Text style={styles.randomNumberText}>{randomNumber}</Text>
    </View>
    
  )}
  



        <Image 
        source={require("odisseiamob/assets/Nave1.png")}
        resizeMode="contain"
        style={[styles.Naves1, {
          transform: [{translateX: navePositionX1}, {translateY: navePositionY1}]
        }]}
        />
        <Image 
        source={require("odisseiamob/assets/pato2.png")}
        resizeMode="contain"
        style={[{ width: 40,right: 665,top: 130, }, {
          transform: [{translateX: navePositionX2}, {translateY: navePositionY2 + 20}]
        }]}
        />

      </View>
    </ImageBackground>
    );
  }
}  
  

export default Multiplayer1
