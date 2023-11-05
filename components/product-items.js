import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, View, Image } from "native-base";

const ProductItem = ({ item }) => {
  return (
    <View width={'100%'} m={1} p={2} height={'225px'} backgroundColor={'#89580A'} alignItems={'center'}>
        <TouchableOpacity>
        <Image source={item.image} maxH={'150px'} alt="null"/>
        <Box>
          <Text fontWeight={"bold"}>{item.judul}</Text>
          <Text fontSize={'15'}>{item.deskripsi}</Text>
        </Box>
        </TouchableOpacity>
    </View>
  );
};

export default ProductItem;