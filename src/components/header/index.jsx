import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import Logo from '../../assets/logo.png';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#25CCB0',
    paddingBottom: 10,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>Caminho Certo</Text>
      <Image style={styles.logo} source={Logo} />
    </View>
  );
}
