import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const transactions = [
  {id: '1', name: 'Starbucks', amount: 12},
  {id: '2', name: 'Tim Hortons', amount: 25},
  {id: '3', name: 'Cineplex', amount: 96},
];

const SummaryScreen = () => {
  const totalSpend = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  const highSpending = transactions.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
  const lowSpending = transactions.reduce((prev, current) => (prev.amount < current.amount ? prev : current));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.text}>Total Transactions: {transactions.length}</Text>
      <Text style={styles.text}>Total Spend: ${totalSpend}</Text>
      <Text style={styles.text}>High Spending: {highSpending.name} - ${highSpending.amount}</Text>
      <Text style={styles.text}>Low Spending: {lowSpending.name} - ${lowSpending.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SummaryScreen;
