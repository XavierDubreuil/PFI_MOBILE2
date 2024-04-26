import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { useState, useEffect, useRef } from 'react';

import { BarreOutils, Bouton } from './BarreOutils';
import ItemMenu from './ItemMenu';
import Tuilerie from './Tuilerie';
import { placerCommandeJSON } from '../utils';
import { supprimerItemPanier, initPanier, obtenirPanier, nbItemPanier } from '../panier';
import stylesCommuns from '../styles';

export default function PanierScreen({ navigation }) {
    const [itemSélectionné, setItemSélectionné] = useState(null);
    const [statutCommande, setStatutCommande] = useState(null);

    
    function supprimerItem() {
        console.log("Supprimer item")
       
    }

    function commanderItems() {
        console.log("Commander item")
      
    }

    return (
        <View style={stylesCommuns.app}>
           
        </View>
    );
}

const styles = StyleSheet.create({
    sectionHaut: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
      },
      sectionBas: {
        flex: 1,
      },
});