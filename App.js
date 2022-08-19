import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Styles } from './styles/Global';

export default function App() {

  const [lastNumber, setLastNumber] = useState();
  const [currentNumber, setCurrentNumber] = useState('');
  const operators = ["C", "DEL", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", '', "="];

  function handleButtonPress(buttonPressed) {
    if (buttonPressed == "+" || buttonPressed == "-" || buttonPressed == "*" || buttonPressed == "/") {

      if (currentNumber.toString().indexOf("+") == -1 && currentNumber.toString().indexOf("-") == -1 && currentNumber.toString().indexOf("*") == -1 && currentNumber.toString().indexOf("/") == -1) {
        setCurrentNumber(currentNumber + " " + buttonPressed + " ");
        return;
      } else {
        const newNumberCurrent = currentNumber.toString().substring(0, currentNumber.length - 3);
        setCurrentNumber('');
        setCurrentNumber(newNumberCurrent + " " + buttonPressed + " ");
        return;
      }
    }

    switch (buttonPressed) {
      case 'C':
        setLastNumber('');
        setCurrentNumber('');
        return;
      case 'DEL':
        setCurrentNumber(currentNumber.slice(0, -1));
        return;
      case '=':
        setLastNumber(currentNumber + "=");
        calculate()
        return;
      case '%':
        var change = currentNumber / 100;
        isNaN(change) ? Alert.alert("Formato inválido") : setCurrentNumber(change);
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  function calculate() {
    const splitNumbers = currentNumber.toString().split(" ");
    const firstNumber = parseFloat(splitNumbers[0]);
    const secondNumber = parseFloat(splitNumbers[2]);
    const operation = splitNumbers[1];

    if (!isNaN(secondNumber)) {
      switch (operation) {
        case '+':
          let result = firstNumber + secondNumber;
          setCurrentNumber(result);
          return;
        case '-':
          result = firstNumber - secondNumber;
          setCurrentNumber(result);
          return;
        case '*':
          result = firstNumber * secondNumber;
          setCurrentNumber(result);
          return;
        case '/':
          result = firstNumber / secondNumber;
          setCurrentNumber(result);
          return;
        default:
          setLastNumber('');
          setCurrentNumber('');
          return;
      }
    } else {
      Alert.alert("Formato inválido");
    }
  }

  return (
    <View style={Styles.main}>
      <View style={Styles.resultContainer}>
        <ScrollView style={Styles.scrollView}>
          <View style={Styles.textContainer}>
            <Text style={Styles.textResult}>
              {currentNumber}
            </Text>
            <Text style={Styles.textHistory}>
              {lastNumber}
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={Styles.operatorContainer}>

        {
          operators.map((char) => (
            <TouchableOpacity
              key={char}
              style={[Styles.operators, {
                backgroundColor: typeof (char) === 'number' || (char) === 'DEL' || (char) === '%' || (char) === '+/-' || (char) === '.' || (char) === '' ?
                  '' : '#7C66D4'
              }]}
              onPress={() => handleButtonPress(char)}
            >
              <Text style={Styles.operatorsText}>{char}</Text>
            </TouchableOpacity>

          ))
        }

      </View>
    </View>
  );
}