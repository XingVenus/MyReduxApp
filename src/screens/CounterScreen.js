// src/screens/CounterScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

const CounterScreen = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <View style={styles.buttonGroup}>
        <Button
          title="Increment +"
          onPress={() => dispatch(increment())}
        />
        <Button
          title="Decrement -"
          onPress={() => dispatch(decrement())}
        />
      </View>

      <Button
        title="Add 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
});

export default CounterScreen;
