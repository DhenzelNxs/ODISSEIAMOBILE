import { Text, View, TouchableOpacity, ImageBackground, TextInput, Image, Linking } from "react-native";
import styles from "../Init/style";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

function Opcoes() {

    const [usuario, setUsuario] = useState("Usuario123");
    const [inputValue, setInputValue] = useState(""); // Track input value
    const [showSaveButton, setShowSaveButton] = useState(false); // Control button visibility
    const [stateFocus, setStateFocus] = useState(false)

    // Function to handle input changes
    const handleInputChange = (text) => {
        setInputValue(text);
        setShowSaveButton(text.length > 0); // Show button when input is not empty
    }

    // Function to handle save button press
    const handleSaveButtonPress = async () => {
        try {
          // Perform save operation or any other action here
          setUsuario(inputValue);
      
          // Save the username to AsyncStorage
          await AsyncStorage.setItem("username", inputValue);
      
          setShowSaveButton(false); // Hide the button
          setStateFocus(false)
        } catch (error) {
          console.error("Error saving username:", error);
        }
      };
      


    const loadSavedUsername = async () => {
        try {
          const savedUsername = await AsyncStorage.getItem("username");
          if (savedUsername !== null) {
            setInputValue(savedUsername);
          }
        } catch (error) {
          console.error("Error loading username:", error);
        }
      };
      
      useEffect(() => {
        loadSavedUsername();
      }, []);

    return (
        <ImageBackground
            source={{ uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp' }}
            resizeMode="cover"
            style={styles.image}
            
        >
            <View style={styles.OptionsAll} >
                <Text style={styles.TitleTextOpcao}>OPÇÕES</Text>
                <Text style={{ color: "#ffffff", marginTop: 20, fontSize: 20 }}>Nome de Usuário: </Text>
                <TextInput
                    placeholder="Usuario"
                    placeholderTextColor="#aba5a5"
                    style={stateFocus == false ? styles.nomeUsuario : styles.nomeUsuarioFocus}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    onFocus={() => setStateFocus(true)}
                    onBlur={() => setStateFocus(false)}
                ></TextInput>

                {showSaveButton && (
                    <TouchableOpacity onPress={handleSaveButtonPress}>
                        <Text style={styles.saveButton}>Salvar</Text>
                    </TouchableOpacity>
                )}

                <Text style={{ color: "#fff", fontSize: 20, marginTop: 30 }}>Redes Sociais</Text>
                <View style={styles.imgRedeContainer}>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/odisseia_interestelar/")}>
                    <Image 
                        source={require("odisseiamob/assets/instagram.png")} 
                        style={styles.imgRede}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://youtube.com/@OdisseiaInterestelar?si=PDU8YHShttq7GbKQ")}>
                    <Image 
                        source={require("odisseiamob/assets/youtube.png")} 
                        style={styles.imgRede}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://github.com/DhenzelNexxus")}>
                    <Image 
                        source={require("odisseiamob/assets/github.png")} 
                        style={styles.imgRedeGithub}
                    />
                </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Opcoes;
