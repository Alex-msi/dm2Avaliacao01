import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

function CampoEntrada(props) {
  function calcularHandler() {
    const dadosFormulario = {
      nome: props.nome,
      email: props.email,
      nota1: props.nota1,
      nota2: props.nota2,
      nota3: props.nota3
    };
    props.onCalcularMedia(dadosFormulario);
  }

  return (
    <View style={styles.containerExterno}>
      <View style={styles.containerInterno}>
        <Text style={styles.titulo}>CALCULADORA DE MÉDIA</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={props.nome}
          onChangeText={props.onNomeChange}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={props.email}
          onChangeText={props.onEmailChange}
        />
        
        <View style={styles.notasContainer}>
          <TextInput
            style={[styles.input, styles.notaInput]}
            placeholder="Nota 1"
            value={props.nota1}
            onChangeText={props.onNota1Change}
            keyboardType="numeric"
          />
          
          <TextInput
            style={[styles.input, styles.notaInput]}
            placeholder="Nota 2"
            value={props.nota2}
            onChangeText={props.onNota2Change}
            keyboardType="numeric"
          />
          
          <TextInput
            style={[styles.input, styles.notaInput]}
            placeholder="Nota 3"
            value={props.nota3}
            onChangeText={props.onNota3Change}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.botoesContainer}>
          <Button
            title="Calcular Média"
            onPress={calcularHandler} />           
            <Button
            title="Reiniciar"
            onPress={props.onReiniciar}
            color="red"
          />
        </View>
      </View>
    </View>
  );
}

export default CampoEntrada;

const styles = StyleSheet.create({
  containerExterno: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 10,
  },
  containerInterno: {
    paddingVertical: 40
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  notasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  notaInput: {
    flex: 1,
    marginHorizontal: 2,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,    
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});