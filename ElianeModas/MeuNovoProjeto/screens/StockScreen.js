// screens/StockScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';

const StockScreen = () => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState([]);

  const addItem = () => {
    if (itemName) {
      setStock([...stock, itemName]);
      setItemName('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Gerenciar Estoque</Text>
      <TextInput
        placeholder="Nome do Item"
        value={itemName}
        onChangeText={setItemName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Adicionar Item" onPress={addItem} />
      <FlatList
        data={stock}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default StockScreen;
