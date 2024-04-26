import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { Image } from 'react-native';

export default function ItemMenu({ sélectionné=false, titre, prix, onPress_cb, image }) {

  const uri = `data:image/jpg;base64,${image}`;
  // <Image source={{ uri }} style={styles.image} />

  return (
    <Pressable style={styleItem} onPress={onPress_cb}>
   
    </Pressable>
  );
}

const styles = StyleSheet.create({

  item: {
    flex: 0,
    height: 170,
    width: 170,
    margin: 10,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "thistle",
  },
  itemSélectionné: {
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "red",
  },
  itemDesc: {
    fontSize: 18,
    color: "palevioletred",
    flex: 0
  },
  image: {
    width: 110,
    height: 110,
  },
});