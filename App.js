import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import inicio from './components/Inicio';
import rutas from './components/Rutas';
import vehiculos from './components/Vehiculos'

export default function App() {
  

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'sesion', title: 'Iniciar Sesión', icon: 'login' },
    { key: 'routes', title: 'Rutas', icon: 'directions' },
    { key: 'vehicles', title: 'Vehiculos', icon: 'car' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    sesion: inicio,
    routes: rutas,
    vehicles: vehiculos,
    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
