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

class TelaAtividade02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      confirmar: '',
      tipoUsuario: 'Aluno',
    };
    // opções do "Tipo de Usuário" (mockup: Aluno / Responsável / Professor)
    this.tipos = ['Aluno', 'Responsável', 'Professor'];
  }

  selecionarTipo = (tipo) => {
    this.setState({ tipoUsuario: tipo });
  };

  onCadastrar = () => {
    const { nome, email, senha, confirmar, tipoUsuario } = this.state;

    if (!nome.trim()) {
      console.log('Informe o nome completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      console.log('Informe um e-mail válido.');
      return;
    }
    if (senha.length < 6) {
      console.log('A senha deve ter no mínimo 6 caracteres.');
      return;
    }
    if (senha !== confirmar) {
      console.log('As senhas não coincidem.');
      return;
    }

    console.log('Cadastro:', { nome, email, tipoUsuario });
    // Ao plugar o react-navigation, descomente:
    // if (this.props.navigation) this.props.navigation.navigate('Home');
  };

  onFacaLogin = () => {
    console.log('Voltar para o login');
    // if (this.props.navigation) this.props.navigation.navigate('Login');
  };

  render() {
    const { tipoUsuario } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={cores.preto} />

        {/* faixa preta do topo com a logo pequena (igual ao mockup) */}
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
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>Preencha os dados</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            placeholderTextColor={cores.verde}
            value={this.state.nome}
            onChangeText={(texto) => this.setState({ nome: texto })}
          />

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

          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor={cores.verde}
            secureTextEntry
            autoCapitalize="none"
            value={this.state.confirmar}
            onChangeText={(texto) => this.setState({ confirmar: texto })}
          />

          {/* ---- Tipo de Usuário: caixa com as 3 opções + seta (igual ao mockup) ---- */}
          <Text style={styles.label}>Tipo de Usuário</Text>
          <View style={styles.selectBox}>
            <View style={styles.selectOpcoes}>
              {this.tipos.map((tipo) => (
                <TouchableOpacity
                  key={tipo}
                  activeOpacity={0.6}
                  onPress={() => this.selecionarTipo(tipo)}
                >
                  <Text
                    style={[
                      styles.selectTexto,
                      tipo === tipoUsuario && styles.selectTextoAtivo,
                    ]}
                  >
                    {tipo}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* seta (chevron) desenhada com View, sem libs */}
            <View style={styles.seta} />
          </View>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.8}
            onPress={this.onCadastrar}
          >
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* rodapé fixo */}
        <View style={styles.rodape}>
          <Text style={styles.rodapeTexto}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={this.onFacaLogin}>
            <Text style={styles.rodapeLink}>Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const cores = {
  verde: '#4CAF50',
  cinzaTexto: '#6B6B6B',
  branco: '#FFFFFF',
  preto: '#000000',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.branco,
  },

  // topo preto com logo
  headerSafe: {
    backgroundColor: cores.preto,
  },
  header: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.preto,
  },
  // logo verde; o círculo branco atrás garante as escritas brancas
  logoCirculo: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFundo: {
    position: 'absolute',
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: cores.branco,
  },
  logo: {
    width: 40,
    height: 40,
    tintColor: cores.verde, // logo verde
  },

  conteudo: {
    flex: 1,
  },
  conteudoInner: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: cores.preto,
    textAlign: 'center',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 20,
    color: cores.preto,
    textAlign: 'center',
    marginBottom: 28,
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
  label: {
    alignSelf: 'flex-start',
    color: cores.preto,
    fontSize: 15,
    marginTop: 4,
    marginBottom: 8,
  },

  // caixa do "Tipo de Usuário"
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: cores.verde,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 24,
    backgroundColor: cores.branco,
  },
  selectOpcoes: {
    flex: 1,
  },
  selectTexto: {
    color: cores.preto,
    fontSize: 16,
    paddingVertical: 4,
  },
  selectTextoAtivo: {
    color: cores.verde,
    fontWeight: 'bold',
  },
  seta: {
    width: 9,
    height: 9,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: cores.cinzaTexto,
    transform: [{ rotate: '45deg' }],
    marginRight: 4,
    marginBottom: 4,
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

export default TelaAtividade02;