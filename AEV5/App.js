import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const saludar = (nombre) => {

  return (
    <Text>{nombre}</Text>
  )

}

const Datos = (dato, estilo) => {

  const [text, onChangeText] = React.useState("");

  let textColor = null

  estilo == styles.florida ? textColor = 'white' : textColor = 'orange'


  return (
    <TextInput
      style={estilo}
      placeholder={dato}
      placeholderTextColor={textColor}
      onChangeText={text => onChangeText(text)

      }
    />
  );
};

const adminButton = (isAdmin) => {

  const [salida, setSalida] = React.useState(false);

  return (
    isAdmin &&
    <View>
      <Button icon='format-list-bulleted' style={styles.button} color='white' onPress={() => setSalida(!salida)} >
        INFORMES
      </Button>
      {salida && <RecorrerDatos />}
    </View>
  )

}

function RecorrerDatos() {

  const modulos2Dam = [
    { nombre: 'DIN', profesor: 'Manel', horas: 120 },
    { nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
    { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
    { nombre: 'PSP', profesor: 'Fran', horas: 60 },
    { nombre: 'SGE', profesor: 'Belén', horas: 100 },
    { nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
    { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
  ];

  return (
    <View>
      {modulos2Dam.map((item, pos) => {

        let estilo = { backgroundColor: '#F48FB1' }
        let estilo2 = { backgroundColor: '#F8BBD0' }

        pos % 2 == 0 ? null : estilo = estilo2

        return (
          <Text key={pos} style={estilo} >
            {pos + 1}{"\n"}
            {item.nombre}{"\n"}
            {item.profesor}{"\n"}
            {item.horas}
          </Text>
        )

      })}
    </View>
  )

}

const App = () => {

  const estilo1 = styles.florida
  const estilo2 = styles.upv
  const isAdmin = true

  return (

    <View>
      {saludar('Ruben Fayos Medie')}
      {Datos('Nombre', estilo1)}
      {Datos('Módulo', estilo2)}
      {adminButton(isAdmin)}
    </View>
  );

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    backgroundColor: 'blue'
  }

});
export default App;