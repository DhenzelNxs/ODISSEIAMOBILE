import React from 'react';
import { Text, View, ImageBackground, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from '../Init/style';

const carouselItems = [
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  {
    nome:'Dhenzel Lima Ribeiro',
    imgUrl: require('odisseiamob/assets/icon.png'),
    funcao: 'Densenvolvedor'
  },
  
  
];

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.30;

function CarouselCardItem({ item }) {
  return (
    <View style={stylesCard.cardCarousel}>
      <Text style={stylesCard.nomeImg}>{item.nome}</Text>
      <Image style={stylesCard.cardImage} source={  item.imgUrl } />
      <Text style={stylesCard.funcaoImg}> {item.funcao} </Text>
    </View>
  );
}

function Creditos() {
  return (
    <ImageBackground
      source={{
        uri:
          'https://images2.alphacoders.com/805/thumbbig-805172.webp',
      }}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.OptionsAll}>
        <Text style={styles.TitleTextCreditos}>CRÉDITOS</Text>
        <Carousel
          data={carouselItems}
          renderItem={({ item }) => <CarouselCardItem item={item} />}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />
      </View>
    </ImageBackground>
  );
}

const stylesCard = StyleSheet.create({
  cardCarousel: {
    width: ITEM_WIDTH,
    paddingTop: 5,
    alignContent:"center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
   
  },
  cardImage: {
    height: 200,
    borderRadius: 100,
    width: 200

  },
  funcaoImg:{
    alignItems: "center",
    color: "orange",
    fontSize: 20,
    fontStyle: "italic",
    
  },
  nomeImg:{
    color: "yellow",
    marginBottom: 6,
    fontSize: 20,
    fontStyle: "italic"
  }
});

export default Creditos;
