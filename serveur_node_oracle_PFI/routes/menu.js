const { Router } = require('express');
const fs = require("fs");

const menuRoutes = Router();

console.log("chargement des images");

const sandwich64base = fs.readFileSync("./images/sandwich.jpg").toString('base64');
const smoothie64base = fs.readFileSync("./images/smoothie.jpg").toString('base64');

menuRoutes.get('/', async (req, res) => {

  res.json([
    {
      titre: "Déjeuner",
      items: [
        {
          idItem: "1",
          nomItem: 'Burrito matin',
          image: sandwich64base,
          prix: 10.00,
        },
        {
          idItem: "2",
          nomItem: 'Croissant',
          image: sandwich64base,
          prix: 2.50,
        },
        {
          idItem: "3",
          nomItem: 'Pouding de chia',
          image: sandwich64base,
          prix: 7.75,
        },
        {
          idItem: "4",
          nomItem: "Overnight à l'avoine",
          image: sandwich64base,
          prix: 7.50,
        },
      ]
    },
    {
      titre: "Sandwichs",
      items: [
        {
          idItem: "5",
          nomItem: 'Grilled Cheese',
          image: sandwich64base,
          prix: 7.50,
        },
        {
          idItem: "6",
          nomItem: 'Wrap végé',
          image: sandwich64base,
          prix: 12.00,
        },
        {
          idItem: "7",
          nomItem: 'Wrap au poulet-féta',
          image: sandwich64base,
          prix: 11.50,
        },
        {
          idItem: "8",
          nomItem: 'Panini Chèvre',
          image: sandwich64base,
          prix: 6.00,
        },
      ]
    },
    {
      titre: "Salades",
      items: [
        {
          idItem: "9",
          nomItem: 'Salade épinard',
          image: sandwich64base,
          prix: 5.00,
        },
        {
          idItem: "10",
          nomItem: 'Salade du marché',
          image: sandwich64base,
          prix: 3.50,
        },
      ]
    },
    {
      titre: "Smoothies",
      items: [
        {
          idItem: "11",
          nomItem: 'Tropical',
          image: sandwich64base,
          prix: 7.50,
        },
        {
          idItem: "12",
          nomItem: 'Fraise, banane',
          image: sandwich64base,
          prix: 7.50,
        },
        {
          idItem: "13",
          nomItem: 'Réconfort',
          image: sandwich64base,
          prix: 8.50,
        },
        {
          idItem: "14",
          nomItem: 'Vert-grano',
          image: sandwich64base,
          prix: 9.60,
        },
        {
          idItem: "15",
          nomItem: 'Réveil matin',
          image: sandwich64base,
          prix: 11.50,
        },
      ]
    },
    {
      titre: "Breuvages",
      items: [
        {
          idItem: "16",
          nomItem: 'Espresso',
          image: sandwich64base,
          prix: 3.75,
        },
        {
          idItem: "17",
          nomItem: 'Latte',
          image: sandwich64base,
          prix: 4.00,
        },
        {
          idItem: "18",
          nomItem: 'Americano',
          image: sandwich64base,
          prix: 3.25,
        },
      ]
    },
  ]);
});

//module.exports = menuRoutes;

module.exports = {
  menuRoutes,
  sandwich64base,
  smoothie64base,
};
