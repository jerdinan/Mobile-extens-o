// screens/DebtorsScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';

const DebtorsScreen = () => {
  const [debtorName, setDebtorName] = useState('');
  const [debtors, setDebtors] = useState([]);

  const addDebtor = () => {
    if (debtorName) {
      setDebtors([...debtors, debtorName]);
      setDebtorName('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Gerenciar Devedores</Text>
      <TextInput
        placeholder="Nome do Devedor"
        value={debtorName}
        onChangeText={setDebtorName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Adicionar Devedor" onPress={addDebtor} />
      <FlatList
        data={debtors}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default DebtorsScreen;
