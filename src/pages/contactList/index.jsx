import React from 'react';
import { View, FlatList } from 'react-native';

import Card from './card';

import logo from '../../assets/logo.png';
import filha from '../../assets/filha.png';

const lista = [
  {
    id: 1,
    foto: logo,
    tipo: 'FILHA',
    nome: 'LARISSA',
    telefone: '(31) 99875-9911',
  },
  {
    id: 2,
    foto: filha,
    tipo: 'NETA',
    nome: 'KAMILLA',
    telefone: '(31) 99875-9222',
  },
  {
    id: 3,
    foto: null,
    tipo: 'FILHA',
    nome: 'ANA CLARA',
    telefone: '(31) 99875-9345',
  },

  {
    id: 1,
    foto: null,
    tipo: 'FILHA',
    nome: 'LARISSA',
    telefone: '(31) 99875-9911',
  },
  {
    id: 2,
    foto: null,
    tipo: 'FILHA',
    nome: 'KAMILLA',
    telefone: '(31) 99875-9222',
  },
  {
    id: 3,
    foto: null,
    tipo: 'FILHA',
    nome: 'ANA CLARA',
    telefone: '(31) 99875-9345',
  },
];

export default function ContactList() {
  return (
    <View>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <Card tipo={item.tipo} nome={item.nome} telefone={item.telefone} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
