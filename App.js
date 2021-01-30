import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const [upperText, setUpText] = useState('');
  const [bottomText, setBotText] = useState('');
  const [calculation, setCalculation] = useState('')

  const addition = () => {
    let result = parseFloat(upperText) + parseFloat(bottomText);
    setCalculation(result);
    setData([...data, {key:upperText+' + '+bottomText+' = '+result}]);
    setUpText('');
    setBotText('');
  }

  const substraction = () => {
    let result = parseFloat(upperText) - parseFloat(bottomText);
    setCalculation(result);
    setData([...data, {key:upperText+' - '+bottomText+' = '+result}]);
    setUpText('');
    setBotText('');
  }

  return (
    <View style={styles.container}>
      <Text>Result: {calculation}</Text>
      <TextInput
        style={styles.input}
        onChangeText={upperText => setUpText(upperText)}
        value={upperText}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        onChangeText={bottomText => setBotText(bottomText)}
        value={bottomText}
        keyboardType='numeric'
      />
      <View style={styles.button}>
        <Button onPress={addition} title="+" />
        <Button onPress={substraction} title="-" />
      </View>
      <Text>History</Text>
      <FlatList
        style={styles.printList}
        data={data}
        renderItem={({item}) =>
          <Text>{item.key}</Text>}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1, 
    padding: 5,
  },
  printList: {
    //flexGrow: 0,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    width: 100,
  }
});