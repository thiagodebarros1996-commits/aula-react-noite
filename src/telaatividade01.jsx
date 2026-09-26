import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

class TelaAtividade01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  // Ação do botão "Entrar"
  onEntrar = () => {
    const { email, senha } = this.state;
    if (!email.trim() || !senha.trim()) {
      console.log('Preencha e-mail e senha.');
      return;
    }
    console.log('Login:', { email, senha });
    // Quando você plugar o react-navigation, descomente:
    // if (this.props.navigation) this.props.navigation.navigate('Home');
  };

  onEsqueciSenha = () => {
    console.log('Fluxo de recuperação de senha');
    // if (this.props.navigation) this.props.navigation.navigate('RecuperarSenha');
  };

  onCadastreSe = () => {
    console.log('Ir para cadastro');
    // if (this.props.navigation) this.props.navigation.navigate('Cadastro');
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Bloco principal rolável e centralizado quando sobra espaço */}
        <ScrollView
          style={styles.conteudo}
          contentContainerStyle={styles.conteudoInner}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require('../img/logo-barao.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Bem-vindo!</Text>
          <Text style={styles.subtitle}>Acesse sua conta</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={cores.placeholder}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            value={this.state.email}
            onChangeText={(texto) => this.setState({ email: texto })}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={cores.placeholder}
            secureTextEntry
            value={this.state.senha}
            onChangeText={(texto) => this.setState({ senha: texto })}
          />

          <TouchableOpacity
            style={styles.link}
            onPress={this.onEsqueciSenha}
          >
            <Text style={styles.linkTexto}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.8}
            onPress={this.onEntrar}
          >
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Rodapé fixo embaixo */}
        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>Ainda não tem conta? </Text>
          <TouchableOpacity onPress={this.onCadastreSe}>
            <Text style={styles.rodapeLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Paleta isolada pra reusar nas outras telas
const cores = {
  verde: '#4CAF50',
  placeholder: '#9E9E9E',
  cinzaTexto: '#6B6B6B',
  branco: '#FFFFFF',
  preto: '#000000',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.branco,
  },
  conteudo: {
    flex: 1,
  },
  conteudoInner: {
    flexGrow: 1,            // permite centralizar verticalmente quando couber
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: cores.preto,
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: cores.cinzaTexto,
    textAlign: 'center',
    marginBottom: 28,
  },
  input: {
    borderWidth: 1,
    borderColor: cores.verde,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    backgroundColor: cores.branco,
    color: cores.preto,
    fontSize: 15,
  },
  link: {
    alignSelf: 'flex-start',
    marginBottom: 18,
  },
  linkTexto: {
    color: cores.preto,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  botao: {
    backgroundColor: cores.verde,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botaoTexto: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 28,
    paddingTop: 8,
  },
  rodapeTexto: {
    color: cores.cinzaTexto,
    fontSize: 13,
  },
  rodapeLink: {
    color: cores.preto,
    fontSize: 13,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default TelaAtividade01;