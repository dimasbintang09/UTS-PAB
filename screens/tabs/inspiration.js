import { useEffect, useState } from "react";
import { 
  Input, 
  NativeBaseProvider, 
  ScrollView,
  View,
  Image, 
  Flex, 
  Box, 
  Text,
  Heading, 
  Body,
  FlatList,
  Card,
  CardItem,
  Center,
 } from "native-base";
import { TouchableOpacity } from "react-native";
import Categories from "../../components/categories";
import inspiration_data from "../../data_dummy/data";
import ProductItem from "../../components/product-items";

const InspirationScreen = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [Products, setProducts] = useState([]);
  // const navigation = useNavigation();

  const categoriesHandler = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const getItems = (activeCategory) => {
    const getItems = inspiration_data.find(item => item.kategori === activeCategory);

    if (getItems) {
      return getItems.inspirasi; 
    } else {
      return null; 
    }
  }

  useEffect (() => {
    setProducts(getItems(activeCategory))
  })
  const renderItem = ({ item }) => {
    return <ProductItem item={item} />;
  };
  
  console.log(inspiration_data);

  return(
    <NativeBaseProvider>
      <ScrollView mx={14} mt={12} scrollIndicatorInsets={false}>
        <Heading mt={1} textAlign={"center"} fontSize={30} color={"#89580A"}>Inspiration</Heading>
        <Categories onChange={categoriesHandler}/>
  
        <FlatList
          data={Products}
          renderItem={ renderItem }
          keyExtractor={(item) => item.id}
          numColumns={1} 
        />
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default InspirationScreen;