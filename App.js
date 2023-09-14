import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptionsMain from './src/Init/Init';
import Jogar from './src/Init/Jogar/jogar';
import Opcoes from './src/Init/Opcoes/opcoes';
import Creditos from './src/Init/Creditos/creditos';
import Multiplayer1 from './src/Init/Jogar/multiplayer/multiplayer1';

const image = { uri: 'https://images2.alphacoders.com/805/thumbbig-805172.webp' };
const Stack = createNativeStackNavigator();

const App = () => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  <NavigationContainer >
    <View style={styles.container}>
     
        <Stack.Navigator initialRouteName="OptionsMain" >
          <Stack.Screen 
          name="OptionsMain" 
          component={OptionsMain}  
          options={{
              headerShown: false,
              headerBackVisible: false, // Esconde o botão de voltar
              headerTitle: '', // Remove o título do cabeçalho />
              
}}></Stack.Screen>
          <Stack.Screen 
          name="Jogar" 
          component={Jogar}  
          options={{
            headerShown: false,
            headerBackVisible: true, // Esconde o botão de voltar
            headerTitle: '', // Remove o título do cabeçalho />
            headerStyle: {
              height: 10, // Defina a altura desejada
            },
}}/>

<Stack.Screen 
          name="Opcoes" 
          component={Opcoes}  
          options={{
            headerShown: false,
            headerBackVisible: true, // Esconde o botão de voltar
            headerTitle: '', // Remove o título do cabeçalho />
            headerStyle: {
              height: 10, // Defina a altura desejada
            },
}}/>

<Stack.Screen 
          name="Creditos" 
          component={Creditos}  
          options={{
            headerShown: false,
            headerBackVisible: true, // Esconde o botão de voltar
            headerTitle: '', // Remove o título do cabeçalho />
            headerStyle: {
              height: 10, // Defina a altura desejada
            },
}}/>
<Stack.Screen 
          name="multiplayer1" 
          component={Multiplayer1}  
          options={{
            headerShown: false,
            headerBackVisible: true, // Esconde o botão de voltar
            headerTitle: '', // Remove o título do cabeçalho />
            headerStyle: {
              height: 10, // Defina a altura desejada
            },
}}/>
        </Stack.Navigator>
      
      <StatusBar hidden={true} />
    </View>
  </NavigationContainer>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
