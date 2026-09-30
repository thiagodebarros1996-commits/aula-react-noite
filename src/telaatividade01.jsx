import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

class TelaAtividade01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  onEntrar = () => {
    const { email, senha } = this.state;

    if (!email.trim() || !email.includes('@')) {
      console.log('Informe um e-mail válido.');
      return;
    }
    if (!senha) {
      console.log('Informe a senha.');
      return;
    }

    console.log('Login:', { email });
    // Ao plugar o react-navigation, descomente:
    // if (this.props.navigation) this.props.navigation.navigate('Home');
  };

  onEsqueciSenha = () => {
    console.log('Esqueci minha senha');
  };

  onCadastrese = () => {
    console.log('Ir para o cadastro');
    // if (this.props.navigation) this.props.navigation.navigate('Cadastro');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={cores.preto} />

        {/* faixa preta do topo com a logo grande sobrepondo a borda (igual ao mockup) */}
        <SafeAreaView style={styles.headerSafe}>
          <View style={styles.header}>
            <View style={styles.logoCirculo}>
              <View style={styles.logoFundo} />
              <Image
                source={require('../img/logo-barao.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
          </View>
        </SafeAreaView>

        <ScrollView
          style={styles.conteudo}
          contentContainerStyle={styles.conteudoInner}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Bem-vindo!</Text>
          <Text style={styles.subtitle}>Acesse sua conta</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={cores.verde}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            value={this.state.email}
            onChangeText={(texto) => this.setState({ email: texto })}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={cores.verde}
            secureTextEntry
            autoCapitalize="none"
            value={this.state.senha}
            onChangeText={(texto) => this.setState({ senha: texto })}
          />

          <TouchableOpacity
            style={styles.esqueciWrapper}
            activeOpacity={0.6}
            onPress={this.onEsqueciSenha}
          >
            <Text style={styles.esqueciTexto}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.8}
            onPress={this.onEntrar}
          >
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* rodapé fixo */}
        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>Ainda não tem conta? </Text>
          <TouchableOpacity onPress={this.onCadastrese}>
            <Text style={styles.rodapeLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const cores = {
  verde: '#4CAF50',
  branco: '#FFFFFF',
  preto: '#000000',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.branco,
  },

  // topo preto + logo grande metade dentro, metade fora
  headerSafe: {
    backgroundColor: cores.preto,
    zIndex: 10, // deixa a logo por cima do conteúdo branco
  },
  header: {
    height: 56,
    alignItems: 'center',
    backgroundColor: cores.preto,
  },
  // logo verde; o círculo branco atrás garante as escritas brancas
  logoCirculo: {
    position: 'absolute',
    bottom: -38,
    width: 76,
    height: 76,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFundo: {
    position: 'absolute',
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: cores.branco,
  },
  logo: {
    width: 76,
    height: 76,
    tintColor: cores.verde, // logo verde
  },

  conteudo: {
    flex: 1,
  },
  conteudoInner: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 68, // espaço para a logo que sai da faixa preta
    paddingBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: cores.preto,
    textAlign: 'center',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 22,
    color: cores.preto,
    textAlign: 'center',
    marginBottom: 36,
  },
  input: {
    borderWidth: 1.5,
    borderColor: cores.verde,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    backgroundColor: cores.branco,
    color: cores.preto,
    fontSize: 16,
  },
  esqueciWrapper: {
    alignSelf: 'center',
    marginTop: 2,
    marginBottom: 28,
  },
  esqueciTexto: {
    color: cores.preto,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  botao: {
    backgroundColor: cores.verde,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: cores.branco,
    fontSize: 18,
    fontWeight: '500',
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 28,
    paddingTop: 8,
  },
  rodapeTexto: {
    color: cores.preto,
    fontSize: 14,
  },
  rodapeLink: {
    color: cores.preto,
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default TelaAtividade01;