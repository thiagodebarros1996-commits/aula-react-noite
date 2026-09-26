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

class TelaAtividade02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      confirmar: '',
      tipoUsuario: 'Aluno',
      dropdownAberto: false,
    };
    // opções do "Tipo de Usuário" (mockup: Aluno / Responsável / Professor)
    this.tipos = ['Aluno', 'Responsável', 'Professor'];
  }

  // alterna o dropdown aberto/fechado
  toggleDropdown = () => {
    this.setState((ant) => ({ dropdownAberto: !ant.dropdownAberto }));
  };

  // escolhe um item e fecha
  selecionarTipo = (tipo) => {
    this.setState({ tipoUsuario: tipo, dropdownAberto: false });
  };

  onCadastrar = () => {
    const { nome, email, senha, confirmar } = this.state;

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

    console.log('Cadastro:', {
      nome,
      email,
      tipoUsuario: this.state.tipoUsuario,
    });
    // Ao plugar o react-navigation, descomente:
    // if (this.props.navigation) this.props.navigation.navigate('Home');
  };

  onFacaLogin = () => {
    console.log('Voltar para o login');
    // if (this.props.navigation) this.props.navigation.navigate('Login');
    // (ou this.props.navigation.goBack(), dependendo das suas rotas)
  };

  render() {
    const { dropdownAberto, tipoUsuario } = this.state;

    return (
      <View style={styles.container}>
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

          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>Preencha os dados</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            placeholderTextColor={cores.placeholder}
            value={this.state.nome}
            onChangeText={(texto) => this.setState({ nome: texto })}
          />

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
            autoCapitalize="none"
            value={this.state.senha}
            onChangeText={(texto) => this.setState({ senha: texto })}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor={cores.placeholder}
            secureTextEntry
            autoCapitalize="none"
            value={this.state.confirmar}
            onChangeText={(texto) => this.setState({ confirmar: texto })}
          />

          {/* ---- Tipo de Usuário (dropdown feito à mão, sem libs) ---- */}
          <Text style={styles.label}>Tipo de Usuário</Text>
          <View style={styles.dropdownWrapper}>
            <TouchableOpacity
              style={[
                styles.dropdownBotao,
                dropdownAberto && styles.dropdownBotaoAberto,
              ]}
              activeOpacity={0.7}
              onPress={this.toggleDropdown}
            >
              <Text style={styles.dropdownValor}>{tipoUsuario}</Text>
              <Text style={styles.dropdownSeta}>{dropdownAberto ? '∧' : '∨'}</Text>
            </TouchableOpacity>

            {dropdownAberto && (
              <View style={styles.menu}>
                {this.tipos.map((tipo) => (
                  <TouchableOpacity
                    key={tipo}
                    style={styles.menuItem}
                    activeOpacity={0.6}
                    onPress={() => this.selecionarTipo(tipo)}
                  >
                    <Text
                      style={[
                        styles.menuTexto,
                        tipo === tipoUsuario && styles.menuTextoAtivo,
                      ]}
                    >
                      {tipo}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.8}
            onPress={this.onCadastrar}
          >
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* rodapé fixo, igual à tela 1 */}
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

// mesma paleta da tela 1 (reuso de conceito)
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
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  logo: {
    width: 64,
    height: 64,
    alignSelf: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: cores.preto,
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: cores.cinzaTexto,
    textAlign: 'center',
    marginBottom: 24,
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
  label: {
    alignSelf: 'flex-start',
    color: cores.preto,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
  },
  // wrapper agrupa botão + menu pra emendar as bordas
  dropdownWrapper: {
    marginBottom: 24,
  },
  dropdownBotao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: cores.verde,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: cores.branco,
  },
  // quando aberto: some a borda de baixo e os cantos de baixo
  dropdownBotaoAberto: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropdownValor: {
    color: cores.preto,
    fontSize: 15,
  },
  dropdownSeta: {
    color: cores.cinzaTexto,
    fontSize: 16,
  },
  // menu no fluxo: some a borda de cima e os cantos de cima -> vira um campo contínuo
  menu: {
    borderWidth: 1,
    borderColor: cores.verde,
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: cores.branco,
    paddingVertical: 4,
    overflow: 'hidden',
  },
  menuItem: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  menuTexto: {
    color: cores.preto,
    fontSize: 15,
  },
  menuTextoAtivo: {
    color: cores.verde,
    fontWeight: 'bold',
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

export default TelaAtividade02;