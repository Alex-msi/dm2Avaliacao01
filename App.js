import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CampoEntrada from './components/CampoEntrada';
import ExibirResultados from './components/ExibirResultados';
import Toast from 'react-native-toast-message';

export default function App() {
  // Estados para os campos de entrada
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  
  // Estado para armazenar o resultado calculado
  const [resultado, setResultado] = useState(null);
  
  // Função para calcular a média
  function calcularMedia(dadosFormulario) {
    // Validação básica
    if (!dadosFormulario.nome.trim() || !dadosFormulario.email.trim() || 
        !dadosFormulario.nota1.trim() || !dadosFormulario.nota2.trim() || !dadosFormulario.nota3.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'Precisa preencher todos os campos!',
        position: 'bottom',
        bottomOffset: 0
      });
      return;
    }
    
    // Converter notas para números
    const n1 = parseFloat(dadosFormulario.nota1) || 0;
    const n2 = parseFloat(dadosFormulario.nota2) || 0;
    const n3 = parseFloat(dadosFormulario.nota3) || 0;
    
    // Validar se as notas estão no intervalo correto (0-10)
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: 'As notas devem estar entre 0 e 10!',
        position: 'bottom',
        bottomOffset: 0
      });
      return;
    }
    
    // Calcular a média
    const media = (n1 + n2 + n3) / 3;
    
    // Criar objeto resultado
    const novoResultado = {
      nome: dadosFormulario.nome,
      email: dadosFormulario.email,
      notas: `${n1} - ${n2} - ${n3}`,
      media: media.toFixed(2),
      id: Math.random().toString()
    };
    
    // Atualizar o estado do resultado
    setResultado(novoResultado);
    
    // Limpar os campos
    setNome('');
    setEmail('');
    setNota1('');
    setNota2('');
    setNota3('');
    
    Toast.show({
      type: 'success',
      text1: 'Sucesso!',
      text2: 'Média calculada com sucesso!',
      position: 'bottom',
      bottomOffset: 140
    });
  }
  
  function limparResultado() {
    setResultado(null);
    Toast.show({
      type: 'info',
      text1: 'Informação',
      text2: 'Resultado foi limpo.',
      position: 'bottom',
      bottomOffset: 0
    });
  }

  function reiniciar() {
    // Limpar todos os campos
    setNome('');
    setEmail('');
    setNota1('');
    setNota2('');
    setNota3('');
    
    // Limpar resultado
    setResultado(null);
    
    Toast.show({
      type: 'info',
      text1: 'Informação',
      text2: 'Todos os campos foram limpos.',
      position: 'bottom',
      bottomOffset: 0       
    });
  }

  return (
    <ScrollView style={styles.appContainer }>
      <CampoEntrada 
        nome={nome}
        email={email}
        nota1={nota1}
        nota2={nota2}
        nota3={nota3}
        onNomeChange={setNome}
        onEmailChange={setEmail}
        onNota1Change={setNota1}
        onNota2Change={setNota2}
        onNota3Change={setNota3}
        onCalcularMedia={calcularMedia}
        onReiniciar={reiniciar}
      />
      <View style={styles.resultsContainer}>
        {resultado && (
          <ExibirResultados
            nome={resultado.nome}
            email={resultado.email}
            notas={resultado.notas}
            media={resultado.media}
            onLimpar={limparResultado}
          />
        )}
      </View>
      <Toast />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'gainsboro'
  },
  resultsContainer: {
    flex: 5
  }
});