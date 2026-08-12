import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

class Aula04 extends Component {
  render() {
    return (
      <View style={styles.container}>

       <Image
            source={require('../assets/icon.png')}
            style={styles.icon }
        />
       <Image
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB95mTGjw8fjNnKQlDgTHQ-UhLkCAKy5McGmHPV0_TfA&s=10'}}
            style={styles.icon }
        />
            
      </View>
    );
  }
}

export default Aula04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 150,
    height: 300,
  },

});