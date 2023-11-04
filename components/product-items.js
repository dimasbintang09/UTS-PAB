import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, View, Image } from "native-base";

const ProductItem = ({ item }) => {
  return (
    <View width={'50%'} m={1} p={2} height={'225px'} backgroundColor={'#FEFFC1'}>
        <TouchableOpacity>
        <Image source={item.image} maxH={'150px'} alt="null"/>
        <Box>
          <Text fontWeight={"bold"}>{item.nama}</Text>
          <Text fontSize={'12px'}>{item.kategori}</Text>
        </Box>
        <Box>
          <Text>Harga: {item.harga}</Text>
        </Box>
        </TouchableOpacity>
    </View>
  );
};

export default ProductItem;