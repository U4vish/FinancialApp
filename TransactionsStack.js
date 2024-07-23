import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionsListScreen from './TransactionsListScreen';
import TransactionDetailScreen from './TransactionDetailScreen';

const Stack = createStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Detail' }} />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
