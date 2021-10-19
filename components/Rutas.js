import * as React from 'react';
import { Image, View, StyleSheet, TextInput, SafeAreaView, Button} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const rutas = () => {
  return (
    <SafeAreaView>
      <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Rutas</Text>
      <Text>{"\n"}</Text>
      <Image source={require('../Images/Ruta.png')}
        style={{ width: 'wrap', height: 150, borderRadius: 15, borderColor: 'red', resizeMode: 'stretch' }}
      /><Text>{"\n"}</Text>
      <Text>Punto de Partida</Text>
      <TextInput style={{ borderBottomWidth: 2, color: 'blue', backgroundColor: 'aqua' }} />
      <Text>{"\n"}</Text>
      <Text>Destino</Text>
      <TextInput style={{ borderBottomWidth: 2, color: 'blue', backgroundColor: 'aqua' }} />
      <Text>{"\n"}</Text>
      <Button
        title="Buscar"
      />
    </SafeAreaView>
  );
}



export default rutas;