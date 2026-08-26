import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image} from 'react-native';

class aula06 extends Component {

    constructor(props) {
      super(props);

      this.state = {
        nome: 'Thiago',
        sobrenome: '',
        imagem: 'https://lncimg.lance.com.br/uploads/2023/08/image_placeholder-1-aspect-ratio-512-320-646.jpg'
       
      } 
      

      this.MudarNome = this.MudarNome.bind(this);
      this.mudarImagem = this.mudarImagem.bind(this);

    }

    MudarNome() {
      this.setState({
        nome: 'Ronaldinho Gaúcho',
        sobrenome: 'de Barros'
        
      })
    }

    mudarImagem() {
      this.setState({
        imagem: 'https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2020/03/13/1584147355038.jpg'
      })
    }

render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit vero numquam, placeat omnis, commodi eligendi odio soluta, nesciunt dolorem
            eaque molestias. Iste itaque soluta libero, repudiandae aliquid dicta! Consequatur, 
            recusandae.
          </Text>
          <Text style={{fontSize: 21, color: 'red', marginTop: 50}}>
            {this.state.nome} {this.state.sobrenome}
          </Text>

          <Button
            title='Mostrar Nome'
            onPress={ this.MudarNome }
          />
          <Image
            source={{uri: this.state.imagem}}
            style={{width: 300, height: 300}}

          />
          <Button
            title='Mudar Imagem'
            onPress={ this.mudarImagem }
          />

        </ScrollView>
      </View>
    );
  }
}

export default aula06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
