import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Box, Center, NativeBaseProvider } from 'native-base';

const SavedScreen = () => {
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      title: 'LINMONN',
      descriptions: ['Tables', 'RP. 579.000'],
      image: require('../assets/item1.jpg')
    },
    {
      id: 2,
      title: 'MALM',
      descriptions: ['Drawers', 'RP. 699.000'],
      image: require('../assets/item2.jpg')
    },
    {
      id: 3,
      title: 'STENSELE',
      descriptions: ['Tables', 'RP. 599.000'],
      image: require('../assets/item3.jpg')
    },
  ]);

  const toggleBookmark = (itemId) => {
    setSavedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  };

  return (
    <NativeBaseProvider>
      <Center marginTop={10}>
      <Text style={{ fontSize: 30, marginBottom: 16 }}>Saved Items</Text>
        {savedItems.map((item) => (
          <Box
            key={item.id}
            flexDirection="row"
            alignItems="center"
            marginTop={5}
            backgroundColor="white"
            borderRadius={8}
            padding={8}
            width={350}
            height={160}
            shadow={5}
            onPress={() => toggleBookmark(item.id)}
          >
            <Image source={item.image} style={{ width: 80, height: 80, marginRight: 15 }} />
            <View>
              <Text fontSize={16} marginBottom={2} fontWeight="bold" color="black">
                {item.title}
              </Text>
              <Text fontSize={12} color="gray.500" marginBottom={10}>
                {item.descriptions[0]}
              </Text>
              <Text fontSize={12} color="#ffd700" fontWeight="bold">
                {item.descriptions[1]}
              </Text>
            </View>
            <Ionicons
              name={item.bookmarked ? 'bookmark' : 'bookmark-outline'}
              size={28}
              color={item.bookmarked ? 'black' : 'black'}
              onPress={() => toggleBookmark(item.id)}
              style={{ marginLeft: 'auto' }}
            />
          </Box>
        ))}
      </Center>
    </NativeBaseProvider>
  );
}

export default SavedScreen;