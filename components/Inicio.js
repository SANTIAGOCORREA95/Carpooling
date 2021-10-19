import * as React from 'react';
import { SafeAreaView, TextInput, Button, Image } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const inicio = () => {
  return (
    <SafeAreaView>
      <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Inicio de sesion</Text>
      <Text>{"\n"}</Text>
      <Image source={require('../images/inicio.png')}
        style={{ width: 'wrap', height: 150, borderRadius: 15, borderColor: 'red', resizeMode: 'stretch' }}
      /><Text>{"\n"}</Text>
      <Text>Usuario</Text>
      <TextInput style={{ borderBottomWidth: 2, color: 'blue', backgroundColor: 'aqua' }} />
      <Text>{"\n"}</Text>
      <Text>Contraseña</Text>
      <TextInput style={{ borderBottomWidth: 2, color: 'blue', backgroundColor: 'aqua' }} />
      <Text>{"\n"}</Text>
      <Button
        title="Iniciar sesion"
      />
    </SafeAreaView>
  );
}
export default inicio;
