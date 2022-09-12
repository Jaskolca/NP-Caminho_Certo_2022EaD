/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import Foto from '../../../assets/filha.png';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 5,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  foto: {
    borderRadius: 15,
    width: 70,
    height: 90,
    marginRight: 10,
  },
});

export default function Card({
  tipo = 'FILHA',
  nome,
  telefone,
  cor,
}) {
  return (
    <View style={[styles.card, { backgroundColor: cor }]}>
      <Image source={Foto} style={styles.foto} />
      <View style={styles.info}>
        <Text>{tipo}</Text>
        <Text>{nome}</Text>
        <Text>{telefone}</Text>
      </View>
    </View>
  );
}
