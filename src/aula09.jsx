import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Aula09 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campo1: "",
      campo2: "",
      campo3: "",
      campo4: "",
      resultado: ""
    };
    this.confirmar = this.confirmar.bind(this);
}

confirmar() {
    this.setState({
        resultado:`${this.state.campo1} ${this.state.campo2} ${this.state.campo3} ${this.state.campo4}`,
        limpaCampos: this.setState({ campo1: "", campo2: "", campo3: "", campo4: "" })

    })
}





  render() {
    return (
        <View style={styles.container}>
            <TextInput
                value={this.state.campo1}
                style={styles.input}
                placeholder="Primeiro texto..." 
                onChangeText={(t) => this.setState({ campo1: t })}
            />  
            <TextInput
                value={this.state.campo2}
                style={styles.input}
                placeholder="Segundo texto..." 
                onChangeText={(t) => this.setState({ campo2: t })}
            /> 
            <TextInput
                value={this.state.campo3}
                style={styles.input}
                placeholder="Terceiro texto..." 
                onChangeText={(t) => this.setState({ campo3: t })}
            /> 
            <TextInput
                value={this.state.campo4}
                style={styles.input}
                placeholder="Quarto texto..." 
                onChangeText={(t) => this.setState({ campo4: t })}
            /> 
            <TouchableOpacity style={styles.botao} onPress={this.confirmar}>
                <Text style={styles.botaoTexto}>Confirmar</Text>
            </TouchableOpacity>
            
            <Text style={ styles.textoResultado }>
                {this.state.resultado}
            </Text>
        </View>
    );
  }
}

export default Aula09;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    fontSize: 30,
    borderWidth: 2,
    marginBottom: 21
  },
  botao: {
    width: 300,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 21,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'abold',
  },

  textoResultado: {
    fontSize: 30,
    color: 'green',
  }
});



//UMA TELA COM 4 CAMPOS
//AO CLICAR NO BOTÃO MOSTRA ABAIXO
//AS INFORMAÇÕES INSERIDAS NOS CAMPOS

