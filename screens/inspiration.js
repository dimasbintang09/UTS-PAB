import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Text, Box, Container } from 'native-base';

const InspirationScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bedroom', 'Dining Room', 'Family Room'];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const renderCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          marginTop: 20,
        }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategoryPress(category)}
          >
            <Box
              bg={selectedCategory === category ? '#89580A' : 'lightblue'}
              mx={2}
              px={8}
              py={2}
              borderRadius={5}
            >
              <Text color="white">{category}</Text>
            </Box>
            
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <NativeBaseProvider>
      <View flex={1} alignItems="center" justifyContent="flex-start" paddingTop={40}>
        <Text fontSize={30} fontWeight="bold" mb={4} color={'#89580A'}>Inspiration</Text>
        {renderCategories()}
        {/* Konten lainnya */}
      </View>
      <View style={{ backgroundColor: 'yellow', padding: 110, marginBottom: 405 }}>
              {/* isi teks */}
            </View>
    </NativeBaseProvider>
  );
};

export default InspirationScreen;