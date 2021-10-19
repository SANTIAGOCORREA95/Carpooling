import * as React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { View, StyleSheet,TextInput } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const vehiculos = () => {
  return (
    <View style={styles.container}>
      <Text>Vehiculos</Text>
      <Text>{"\n"}</Text>
      <SafeAreaView style={{ flexDirection: 'row', flexWrap: 'wrap'  }}>

        <Text>{"\n"}</Text>
        <View>
          <Image
            source={require('../images/300px.jpg')}
            style={{ width: 100, height: 100, borderRadius: 10, borderColor: 'blue', borderWidth: 2, resizeMode: 'stretch', marginRight: 5 , alignItems:'center'}}
          />
          <Text style={{textAlign: "center"}}>Propietario</Text>
          <TextInput style={{ color: 'blue', backgroundColor: '', width: 100 }} />
          <Text style={{textAlign: "center"}}>Calificacion</Text>
          <TextInput style={{ color: 'blue', backgroundColor: '' , width: 100 }} />
        </View>
        <Text>{"\n"}</Text>
        <View>
          <Image
            source={require('../images/descarga.jpg')}
            style={{ width: 100, height: 100, borderRadius: 10, borderColor: 'blue', borderWidth: 2, resizeMode: 'stretch' }}
          />
          <Text style={{textAlign: "center"}}>Propietario</Text>
          <TextInput style={{ color: 'blue', backgroundColor: '', width: 100 }} />
          <Text style={{textAlign: "center"}}>Calificacion</Text>
          <TextInput style={{  color: 'blue', backgroundColor: '', width: 100 }} />
        </View>
        <Text>{"\n"}</Text>
        <View>
          <Image
            source={require('../images/Portada-38.jpg')}
            style={{ width: 100, height: 100, borderRadius: 10, borderColor: 'blue', borderWidth: 2, resizeMode: 'stretch', marginLeft: 5 }}
          />
          <Text style={{textAlign: "center"}}>Propietario</Text>
          <TextInput style={{ color: 'blue', backgroundColor: '', width: 100 }} />
          <Text style={{textAlign: "center"}}>Calificacion</Text>
          <TextInput style={{ color: 'blue', backgroundColor: '', width: 100 }} />
        </View>
        <Text>{"\n"}</Text>
        <View>
        <Image
        source={require('../images/1366_2000.jpg')}
        style={{ width: 100, height: 100, borderRadius: 10, borderColor: 'blue', borderWidth: 2, resizeMode: 'stretch', marginLeft: 5 }}
        />
        <Text style={{textAlign: "center"}}>Propietario</Text>
        <TextInput style={{ color: 'blue', backgroundColor: '', width: 100 }} />
        <Text style={{textAlign: "center"}}>Calificacion</Text>
        <TextInput style={{ color: 'blue', backgroundColor: '', width: 100 }} />
        </View>
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "yellow",
    fontSize: 25,
    lineHeight: 124,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
export default vehiculos;