import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { BarreOutils, Bouton } from './BarreOutils';
import ItemMenu from './ItemMenu';

import { obtenirMenuJSON } from '../utils';
import { nbItemPanier, ajouterItemPanier } from '../panier';

import stylesCommuns from '../styles';

export default function ArdoiseScreen({ navigation }) {
  const [menuJSON, setMenu] = useState([]);
 
  function choisirItem() {
    console.log("Choisir item");
    
  }

  return (
    <View style={stylesCommuns.app}>

    </View>
  );
}

function Catégorie({ titre, couleur, children }) {
  return (
    <View style={[styles.section,{ backgroundColor: couleur }]}>
     
    </View>
  );
}

const styles = StyleSheet.create({
  sectionDesc: {
    textAlign: 'left',
    fontSize: 22,
  },
  section: {
    margin: 5,
  },
});