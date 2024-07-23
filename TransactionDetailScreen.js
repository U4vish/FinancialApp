import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TransactionDetailScreen = ({route}) => {
  const {transaction} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <Text style={styles.text}>Amount: {transaction.amount}</Text>
      <Text style={styles.text}>Name: {transaction.name}</Text>
      <Text style={styles.text}>Location: {transaction.location}</Text>
      <Text style={styles.text}>Date: {transaction.date}</Text>
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

export default TransactionDetailScreen;
