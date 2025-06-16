import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function ExibirResultados(props) {
  return (
    <Pressable onPress={props.onLimpar}>
      <View style={styles.resultItem}>
        <Text style={styles.resultText}>Nome: {props.nome}</Text>
        <Text style={styles.resultText}>Email: {props.email}</Text>
        <Text style={styles.resultText}>Notas: {props.notas}</Text>
        <Text style={styles.resultText}>Média: {props.media}</Text>
      </View>
    </Pressable>
  );
}

export default ExibirResultados;

const styles = StyleSheet.create({
  resultItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#487d76'
  },
  resultText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4
  }
});