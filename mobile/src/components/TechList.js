import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';

// import { Container } from './styles';

export default function Components() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  };

  return (
    <View>
      <FlatList
      data={techs}
      keyExtractor={tech => tech}
      renderItem={({ item }) => <Text>{item}</Text>}
      />

      <TextInput testID="tech-input" value={newTech} onChangeText={setNewTech} />

      <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}