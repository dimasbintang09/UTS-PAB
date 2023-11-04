// import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { 
  Input, 
  NativeBaseProvider, 
  ScrollView,
  Image, 
  Flex, 
  Box, 
  Text,
  Heading, 
  Body,
  FlatList,
  Card,
  CardItem,
 } from "native-base";
import { TouchableOpacity } from "react-native";
import Categories from "../../components/categories";
import items from "../../data_dummy/data";
import ProductItem from "../../components/product-items";

const InspirationScreen = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [Products, setProducts] = useState([]);
  // const navigation = useNavigation();

  const categoriesHandler = (categoryName) => {
    setActiveCategory(categoryName);
    const Product = getItems(categoryName);
    setProducts(Product);
  };

  const getItems = (activeCategory) => {
    const getItems = items.find(item => item.kategori === activeCategory);

    if (getItems) {
      return getItems.items; 
    } else {
      return null; 
    }
  }

  const renderItem = ({ item }) => {
    return <ProductItem item={item} />;
  };
  
  console.log(Products);
}
export default InspirationScreen;