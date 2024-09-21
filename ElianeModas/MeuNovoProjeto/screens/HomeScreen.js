import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log("HomeScreen renderizada"); // Adicione esta linha

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bem-vindo à Loja Eliane Modas!</Text>
      <Button title="Gerenciar Devedores" onPress={() => navigation.navigate('Debtors')} />
      <Button title="Gerenciar Estoque" onPress={() => navigation.navigate('Stock')} />
    </View>
  );
};

export default HomeScreen;
