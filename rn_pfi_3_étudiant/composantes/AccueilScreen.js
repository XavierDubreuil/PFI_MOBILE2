import { StyleSheet, Text, View, Pressable } from 'react-native';

import { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';

import { nbItemPanier, initPanier } from '../panier';
import stylesCommuns from '../styles';
import Tuilerie from './Tuilerie';
export default function AccueilScreen({ navigation, route }) {
  const { nom } = route.params;
let nbPanier = nbItemPanier();
console.log(nbPanier);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <AntDesign name="logout" size={25}
            color="blue"
            onPress={() => {
              navigation.replace("Authen");
            }}>
          </AntDesign>
        );
      },
      headerRight: () => {
          if(nbPanier>0){
            return (
              <AntDesign name="shoppingcart" size={25}
              color="blue"
              onPress={() => {
                navigation.navigate("Panier");
              }}
              >
              </AntDesign>
            )
          }
      }
    });
  }, [navigation]);

  return (
    <View style={stylesCommuns.app}>
      <View style={styles.écranHaut}>
        <Text style={styles.bienvenue}>Bonjours {nom}</Text>
      </View>
      <View>
        <Tuilerie>
          <Tuile texte={"Menu"} iconNom={"book"} onPress_cb={() => {navigation.navigate('Ardoise')}}>
          </Tuile>
          <Tuile texte={"Commande"} iconNom={"inbox"} onPress_cb={() => navigation.navigate('Commandes')}>
          </Tuile>
          <Tuile texte={"Nous joindre"} iconNom={"team"} onPress_cb={() => navigation.navigate('RestoInfo')}>
          </Tuile>
        </Tuilerie>
      </View>

    </View>
  );
}

export function Tuile({ texte, onPress_cb, iconNom }) {
  return (
    <Pressable style={styles.tuile} onPress={()=>onPress_cb()}>
      <View style={styles.sectionHaut}>
        <AntDesign name={iconNom} size={40} color="blue" />
      </View>
      <View style={styles.sectionBas}>
        <View style={styles.tuile_texte_box}>
          <Text style={styles.tuile_texte}>{texte}</Text>
        </View>
      </View>

    </Pressable>
  );
}
function test(){
  console.log("test");
}
const styles = StyleSheet.create({
  écranHaut: {
    flex: 0.3,
    alignItems: "center",
  },
  sectionHaut: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionBas: {
    flex: 1,
  },
  bienvenue: {
    fontSize: 22,
  },
  tuile: {
    flex: 0,
    height: 150,
    width: 150,
    margin: 10,
    backgroundColor: "#EAADEA",
  },
  tuile_icon: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  tuile_texte_box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tuile_texte: {
    fontSize: 22,
  },
});

