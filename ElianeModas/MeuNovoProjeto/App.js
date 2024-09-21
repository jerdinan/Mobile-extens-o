import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // ajuste o caminho conforme necessário
import DebtorsScreen from './screens/DebtorsScreen'; // ajuste o caminho conforme necessário
import StockScreen from './screens/StockScreen'; // ajuste o caminho conforme necessário

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Debtors" component={DebtorsScreen} />
        <Stack.Screen name="Stock" component={StockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
