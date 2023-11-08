import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, Image, Box, ScrollView } from "native-base";

function DetailScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, itemDetail } = route.params;
  const imageMapping = {
    itemId1: require('../../assets/item1.jpg'),
    itemId2: require('../../assets/item2.jpg'),
  };
  const imageSource = imageMapping[itemId];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(itemDetail)}</Text>
      <Image source={imageSource} style={{ width: 200, height: 200 }} />
    </View>
  );
}
export default DetailScreen;