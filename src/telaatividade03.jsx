import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

class TelaAtividade03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abaAtual: 'inicio', // 'inicio' | 'noticias' | 'chat' | 'calendario' | 'perfil'
    };

    // Abas laterais (2 à esquerda do botão central, 2 à direita)
    this.abasLaterais = [
      { chave: 'inicio', rotulo: 'Início', icone: '🏠' },
      { chave: 'noticias', rotulo: 'Notícias', icone: '📰' },
      { chave: 'calendario', rotulo: 'Calendário', icone: '📅' },
      { chave: 'perfil', rotulo: 'Perfil', icone: '👤' },
    ];

    // Conteúdo do feed
    this.feedItems = [
      {
        id: '1',
        titulo: 'Feira de Ciências 2026:\nInscrições Abertas!',
        tag: 'Periódico',
        corpo:
          'Estão abertas as inscrições para a Feira de Ciências 2026! Participe com o seu projeto e mostre o que você aprendeu. Confira as datas e o regulamento com a coordenação da escola.',
        data: '15 Maio',
        imagem: require('../img/feira.jpg'),
        temBloco: false,
      },
      {
        id: '2',
        titulo: 'Comunicado: Alteração no\nHorário da Biblioteca',
        tag: null,
        corpo: '',
        data: '14 Maio',
        imagem: null,
        temBloco: true,
      },
    ];
  }

  trocarAba = (chave) => {
    this.setState({ abaAtual: chave });
  };

  render() {
    const { abaAtual } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.black} />

        {/* --- HEADER PRETO --- */}
        <SafeAreaView style={styles.headerSafe}>
          <View style={styles.header}>
            <View style={styles.headerLado} />

            <View style={styles.logoCirculo}>
              <View style={styles.logoFundo} />
              <Image
                source={require('../img/logo-barao.png')}
                style={styles.logoTopo}
                resizeMode="contain"
              />
            </View>

            <TouchableOpacity
              style={styles.headerLado}
              activeOpacity={0.7}
              onPress={() => this.trocarAba('perfil')}
            >
              <View style={styles.iconPerfilContainer}>
                <Text style={styles.iconPerfilTexto}>👤</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* --- FEED --- */}
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollInner}
          showsVerticalScrollIndicator={false}
        >
          {this.feedItems.map((item) => (
            // card externo: sombra | card interno: recorta os cantos arredondados
            <View key={item.id} style={styles.cardSombra}>
              <View style={styles.card}>
                {item.imagem ? (
                  <Image
                    source={item.imagem}
                    style={styles.cardImagem}
                    resizeMode="cover"
                  />
                ) : null}

                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.titulo}</Text>
                  {item.tag ? <Text style={styles.cardTag}>{item.tag}</Text> : null}
                  {item.corpo ? (
                    <Text style={styles.cardBody} numberOfLines={3}>
                      {item.corpo}
                    </Text>
                  ) : null}
                  <Text style={styles.cardDate}>{item.data}</Text>
                  {item.temBloco ? <View style={styles.cardBloco} /> : null}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* --- BARRA INFERIOR --- */}
        {/* box-none: a área transparente de cima deixa o toque passar para o feed */}
        <View style={styles.bottomWrapper} pointerEvents="box-none">
          <View style={styles.bottomBar}>
            <View style={styles.navSide}>
              {this.abasLaterais.slice(0, 2).map((aba) => (
                <NavItem
                  key={aba.chave}
                  aba={aba}
                  ativo={abaAtual === aba.chave}
                  onPress={() => this.trocarAba(aba.chave)}
                />
              ))}
            </View>

            {/* espaço reservado para o botão central */}
            <View style={styles.centerSpacer} />

            <View style={styles.navSide}>
              {this.abasLaterais.slice(2).map((aba) => (
                <NavItem
                  key={aba.chave}
                  aba={aba}
                  ativo={abaAtual === aba.chave}
                  onPress={() => this.trocarAba(aba.chave)}
                />
              ))}
            </View>
          </View>

          {/* faixa verde de baixo com a linha do "home indicator" */}
          <View style={styles.bottomStripe}>
            <View style={styles.homeIndicator} />
          </View>

          {/* botão central (Chat) saindo da barra */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.centerButton}
            onPress={() => this.trocarAba('chat')}
          >
            <View style={styles.centerLogoWrap}>
              <View style={styles.centerLogoFundo} />
              <Image
                source={require('../img/logo-barao.png')}
                style={styles.centerLogoImg}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <Text
            pointerEvents="none"
            style={[
              styles.centerLabel,
              abaAtual === 'chat' && styles.navLabelAtivo,
            ]}
          >
            Chat
          </Text>
        </View>
      </View>
    );
  }
}

// Item da barra inferior
const NavItem = ({ aba, ativo, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.navItem} activeOpacity={0.7}>
    <Text style={[styles.navIcon, { opacity: ativo ? 1 : 0.85 }]}>{aba.icone}</Text>
    <Text style={[styles.navLabel, ativo && styles.navLabelAtivo]}>{aba.rotulo}</Text>
  </TouchableOpacity>
);

const COLORS = {
  green: '#4CAF50',
  white: '#FFFFFF',
  black: '#000000',
  background: '#F2F2F2',
  textDark: '#111111',
  textGray: '#8A8A8A',
  blocoGray: '#EFEFEF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // --- Header ---
  headerSafe: {
    backgroundColor: COLORS.black,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: COLORS.black,
  },
  headerLado: {
    width: 36,
    alignItems: 'flex-end',
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
    backgroundColor: COLORS.white,
  },
  logoTopo: {
    width: 40,
    height: 40,
    tintColor: COLORS.green, // logo verde
  },
  iconPerfilContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPerfilTexto: {
    fontSize: 16,
  },

  // --- Feed ---
  scrollArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollInner: {
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 130, // espaço para a barra inferior
  },
  // sombra fica fora (no iOS, overflow:hidden cortaria a sombra)
  cardSombra: {
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginBottom: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
  },
  cardImagem: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 6,
  },
  cardTag: {
    fontSize: 12,
    color: COLORS.textGray,
    marginBottom: 10,
  },
  cardBody: {
    fontSize: 13,
    color: COLORS.textDark,
    lineHeight: 19,
    marginBottom: 14,
  },
  cardDate: {
    fontSize: 13,
    color: COLORS.textGray,
  },
  cardBloco: {
    height: 90,
    borderRadius: 14,
    backgroundColor: COLORS.blocoGray,
    marginTop: 14,
  },

  // --- Barra inferior ---
  // altura = 30 (área do botão que sai) + 62 (barra) + 24 (faixa verde)
  bottomWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 116,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomBar: {
    alignSelf: 'stretch',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 6,
  },
  navSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerSpacer: {
    width: 78,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  navLabel: {
    fontSize: 10,
    color: COLORS.white,
  },
  navLabelAtivo: {
    color: COLORS.green,
    fontWeight: 'bold',
  },

  // faixa verde
  bottomStripe: {
    alignSelf: 'stretch',
    height: 24,
    backgroundColor: COLORS.green,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIndicator: {
    width: 110,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.black,
    opacity: 0.85,
  },

  // botão central (fica dentro do wrapper, então recebe toque no Android)
  // 3) círculo preto do botão
centerButton: {
  position: 'absolute',
  top: 0,
  width: 58,              // era 64
  height: 58,             // era 64
  borderRadius: 40,       // sempre metade do width
  backgroundColor: COLORS.black,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: COLORS.black,
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 8,
},
  centerLogoWrap: {
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerLogoFundo: {
    position: 'absolute',
    width: 47,
    height: 47,
    borderRadius: 24,
    backgroundColor: COLORS.white,
  },
  centerLogoImg: {
    width: 54,
    height: 54,
    tintColor: COLORS.green, // logo verde
  },
  centerLabel: {
    position: 'absolute',
    top: 70,
    fontSize: 10,
    color: COLORS.white,
  },
});

export default TelaAtividade03;