import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const transactions = [
  {id: '1', name: 'Starbucks', amount: '$12', date: 'Mar 24, 2024', location: 'North York, Ontario'},
  {id: '2', name: 'Tim Hortons', amount: '$25', date: 'Mar 25, 2024', location: 'Toronto, Ontario'},
  {id: '3', name: 'Cineplex', amount: '$96', date: 'Mar 26, 2024', location: 'Vaughan, Ontario'},
];

const TransactionsListScreen = ({navigation}) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TransactionDetail', {transaction: item})}>
          <Text style={styles.itemText}>{`${item.name} ${item.amount}`}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 18,
  },
});

export default TransactionsListScreen;
