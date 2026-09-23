import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class TelaAtividade01 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../img/logo-barao.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Seja bem-vindo!!</Text>
        <Text style={styles.subtitle}>Acesse sua conta</Text>
        
      </View>
      
    );
  }
}

export default TelaAtividade01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
});

