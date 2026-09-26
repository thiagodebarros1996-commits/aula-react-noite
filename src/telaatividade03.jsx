import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

/*
  UPGRADE DE ÍCONES (opcional, quando instalar a lib):
    npm install react-native-vector-icons
  e trocada cada <Text>{aba.emoji}</Text> por, ex.:
    import Ionicons from 'react-native-vector-icons/Ionicons';
    <Ionicons name="home-outline" size={22} color={ativo ? '#FFF' : 'rgba(255,255,255,0.7)'} />
  Isso deixa os ícones monocromáticos iguais ao mockup (hoje uso emoji p/ rodar sem lib).
*/

class TelaAtividade03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abaAtual: 'inicio', // 'inicio' | 'noticias' | 'calendario' | 'perfil'
    };

    // abas da barra inferior (2 à esquerda do vão central, 2 à direita)
    this.abas = [
      { chave: 'inicio',     rotulo: 'Início',     emoji: '🏠' },
      { chave: 'noticias',   rotulo: 'Notícias',   emoji: '📰' },
      { chave: 'calendario', rotulo: 'Calendário', emoji: '📅' },
      { chave: 'perfil',     rotulo: 'Perfil',     emoji: '👤' },
    ];

    // avisos do feed (aba Início). 'temImagem' liga o placeholder de foto.
    this.avisos = [
      {
        id: '1',
        titulo: 'Feira de Ciências 2026: Inscrições Abertas!',
        tag: 'Periódico',
        corpo:
          'Feira de Ciências 2026: Inscrições Abertas! No mês a acessa contaua de escudala e Alitera: Inscrições Aberta...',
        data: '15 Maio',
        temImagem: true,
      },
      {
        id: '2',
        titulo: 'Comunicado: Alteração no Horário da Biblioteca',
        tag: null,
        corpo: '',
        data: '14 Maio',
        temImagem: false,
      },
    ];
  }

  trocarAba = (chave) => {
    this.setState({ abaAtual: chave });
  };

  // botão central (logo): ação rápida / chat. Sem lib, só loga.
  onBotaoCentral = () => {
    console.log('Botão central: Chat / ação rápida');
    // Upgrades possíveis (100% core RN): abrir um <Modal visible=...> de chat,
    // ou, com react-navigation, this.props.navigation.navigate('Chat').
  };

  onPerfilTopo = () => {
    // o ícone do topo leva à mesma aba "Perfil" da barra
    this.setState({ abaAtual: 'perfil' });
  };

  // ---- render de um item da barra ----
  renderAba = (aba) => {
    const ativo = this.state.abaAtual === aba.chave;
    return (
      <TouchableOpacity
        key={aba.chave}
        style={styles.abaItem}
        activeOpacity={0.7}
        onPress={() => this.trocarAba(aba.chave)}
      >
        <Text style={[styles.abaEmoji, !ativo && styles.abaEmojiInativo]}>
          {aba.emoji}
        </Text>
        <Text style={[styles.abaRotulo, ativo && styles.abaRotuloAtivo]}>
          {aba.rotulo}
        </Text>
      </TouchableOpacity>
    );
  };

  // ---- render de um card do feed ----
  renderAviso = (item) => {
    return (
      <View key={item.id} style={styles.card}>
        {item.temImagem && (
          /* Troque este bloco por:
             <Image source={require('../img/feira.png')} style={styles.cardImg} />
             ou  <Image source={{ uri: 'https://...' }} style={styles.cardImg} />  */
          <View style={styles.cardImgPlaceholder}>
            <Text style={styles.cardImgEmoji}>🖼️</Text>
            <Text style={styles.cardImgLegenda}>Foto da Feira de Ciências</Text>
          </View>
        )}

        <View style={styles.cardCorpo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>

          {item.tag ? (
            <Text style={styles.cardTag}>{item.tag}</Text>
          ) : null}

          {item.corpo ? (
            <Text style={styles.cardTexto} numberOfLines={2}>
              {item.corpo}
            </Text>
          ) : null}

          <Text style={styles.cardData}>{item.data}</Text>
        </View>
      </View>
    );
  };

  // ---- corpo: feed (Início) ou placeholder (demais abas) ----
  renderCorpo = () => {
    if (this.state.abaAtual === 'inicio') {
      return (
        <ScrollView
          style={styles.corpo}
          contentContainerStyle={styles.corpoFeed}
          showsVerticalScrollIndicator={false}
        >
          {this.avisos.map(this.renderAviso)}
        </ScrollView>
      );
    }

    const aba = this.abas.find((a) => a.chave === this.state.abaAtual);
    return (
      <View style={styles.paginaSimples}>
        <Text style={styles.paginaEmoji}>{aba ? aba.emoji : '📄'}</Text>
        <Text style={styles.paginaTitulo}>{aba ? aba.rotulo : ''}</Text>
        <Text style={styles.paginaSub}>Tela em construção</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* ---------- Header: logo no centro, perfil à direita ---------- */}
        <View style={styles.header}>
          <View style={styles.headerLado} /> {/* spacer esq p/ centralizar */}
          <Image
            source={require('../img/logo-barao.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <View style={styles.headerLado}>
            <TouchableOpacity onPress={this.onPerfilTopo} hitSlop={8}>
              <Text style={styles.headerPerfil}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ---------- Corpo (feed ou placeholder) ---------- */}
        {this.renderCorpo()}

        {/* ---------- Barra inferior (absoluta, com vão central) ---------- */}
        <View style={styles.barra}>
          <View style={styles.barraLado}>
            {this.abas.slice(0, 2).map(this.renderAba)}
          </View>
          <View style={styles.barraVao} /> {/* vão onde o botão central encaixa */}
          <View style={styles.barraLado}>
            {this.abas.slice(2).map(this.renderAba)}
          </View>
        </View>

        {/* ---------- Botão central (logo) por cima da barra ---------- */}
        <View style={styles.botaoCentralWrapper}>
          <TouchableOpacity
            style={styles.botaoCentral}
            activeOpacity={0.85}
            onPress={this.onBotaoCentral}
          >
            <Image
              source={require('../img/logo-barao.png')}
              style={styles.botaoCentralImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// mesma paleta das telas 1 e 2
const cores = {
  verde: '#4CAF50',
  placeholder: '#9E9E9E',
  cinzaTexto: '#6B6B6B',
  branco: '#FFFFFF',
  branco70: 'rgba(255,255,255,0.7)',
  preto: '#000000',
  fundoFeed: '#F4F4F4',
  bordaSuave: '#E0E0E0',
};

const ALTURA_BARRA = 60;
const TAM_BOTAO = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundoFeed,
  },

  // ----- header -----
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.branco,
    height: 56,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: cores.bordaSuave,
  },
  headerLado: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  headerPerfil: {
    fontSize: 22,
  },

  // ----- corpo -----
  corpo: {
    flex: 1,
  },
  corpoFeed: {
    padding: 16,
    paddingBottom: ALTURA_BARRA + 40, // não esconde o último card atrás da barra
  },
  paginaSimples: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: ALTURA_BARRA,
  },
  paginaEmoji: {
    fontSize: 56,
    opacity: 0.5,
  },
  paginaTitulo: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.preto,
  },
  paginaSub: {
    marginTop: 4,
    fontSize: 14,
    color: cores.cinzaTexto,
  },

  // ----- card do feed -----
  card: {
    backgroundColor: cores.branco,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden', // arredonda a imagem no topo
    // sombra (iOS) + elevation (Android)
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardImgPlaceholder: {
    height: 150,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImgEmoji: {
    fontSize: 40,
  },
  cardImgLegenda: {
    marginTop: 6,
    fontSize: 12,
    color: cores.cinzaTexto,
  },
  cardCorpo: {
    padding: 14,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.preto,
  },
  cardTag: {
    marginTop: 6,
    fontSize: 12,
    color: cores.cinzaTexto,
  },
  cardTexto: {
    marginTop: 8,
    fontSize: 13,
    color: cores.cinzaTexto,
    lineHeight: 18,
  },
  cardData: {
    marginTop: 10,
    fontSize: 12,
    color: cores.cinzaTexto,
  },

  // ----- barra inferior -----
  barra: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: ALTURA_BARRA,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.verde,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: -2 },
    elevation: 8,
  },
  barraLado: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  barraVao: {
    width: TAM_BOTAO, // reserva o espaço exato do botão central
  },
  abaItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  abaEmoji: {
    fontSize: 20,
  },
  abaEmojiInativo: {
    opacity: 0.65,
  },
  abaRotulo: {
    marginTop: 2,
    fontSize: 11,
    color: cores.branco70,
  },
  abaRotuloAtivo: {
    color: cores.branco,
    fontWeight: 'bold',
  },

  // ----- botão central (notch) -----
  botaoCentralWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: ALTURA_BARRA / 2 - TAM_BOTAO / 2, // metade do botão sai pra cima da barra
    alignItems: 'center',
    zIndex: 10,
  },
  botaoCentral: {
    width: TAM_BOTAO,
    height: TAM_BOTAO,
    borderRadius: TAM_BOTAO / 2,
    backgroundColor: cores.branco,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
  },
  botaoCentralImg: {
    width: 34,
    height: 34,
  },
});

export default TelaAtividade03;