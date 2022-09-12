/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

import Constants from 'expo-constants';

import Header from '../../components/header';

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  viewButtons: {
    padding: 25,
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default function Home({ navigation }) {
  return (
    <View style={styles.viewPrincipal}>
      <Header />
      <View style={styles.viewButtons}>
        <Button
          title="SOS"
          color="#f00"
          onPress={() => navigation.navigate('contacts')}
        />
        <Button
          title="Registro"
          color="#25CCB0"
          onPress={() => Alert.alert('Click no notão Registro')}
        />
        <Button
          title="Rastreio"
          color="#25CCB0"
          onPress={() => Alert.alert('Click no notão Rastreio')}
        />
      </View>
    </View>
  );
}
