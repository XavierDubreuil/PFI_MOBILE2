import { StyleSheet, Text, View, Pressable } from 'react-native';

import { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';

import { nbItemPanier, initPanier } from '../panier';
import stylesCommuns from '../styles';
import Tuilerie from './Tuilerie';

export default function AccueilScreen({ navigation, route }) {
  const { nom } = route.params;

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
    });
  }, [navigation]);

  return (
    <View style={stylesCommuns.app}>
     
    </View>
  );
}

export function Tuile({ texte, onPress_cb, iconNom }) {
  return (
    <View style={styles.tuile}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHaut: {
   
  },
  sectionBas: {

  },
  bienvenue: {
    fontSize: 22,
  },
  tuile: {
    flex: 0,
    height: 150,
    width: 150,
    margin: 10,
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

