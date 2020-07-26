import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const background = {
  uri: 'https://images.unsplash.com/photo-1584018344977-1785e2aab7fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
}

function SingUp() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={background} style={styles.background} blurRadius={2}>
        <View style={styles.container}>
          <Text style={styles.title}>Triptych</Text>
          <View style={styles.view}>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>User</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.separator} />
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Pass</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.separator} />
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Confirm Pass</Text>
              <TextInput style={styles.input} />
            </View>
          </View>
          <RectButton style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <View style={styles.buttonIcon}>
              <FontAwesome name="user-plus" color="#fff" size={20} />
            </View>
              <Text style={styles.buttonText}>Cadastrar</Text>
          </RectButton>
          <TouchableOpacity 
            activeOpacity={1} 
            style={styles.link}
            onPress={() => navigation.navigate('SignIn')}
            >
            <Text style={{fontFamily: 'Roboto_Black'}}>Já possui uma conta? </Text>
            <Text style={styles.textLink}>Faça o Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffffc5",
  },
  title: {
    width: '100%',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: "Galada",
    color: '#fff',
    textShadowOffset: {
      height: 2.5,
      width: 2.5
    },
    textShadowColor: '#BF74EDaa',
    textShadowRadius: 1,
  },
  view: {
    width: '90%',
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#1A0328c5'
  },
  inputView: {
    height: 64,
    padding: 8,
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
  },
  inputText: {
    fontSize: 16,
    fontFamily: 'ChelaOne',
    color: '#525252'
  },
  input: {
    paddingLeft: 8,
  },
  separator: {
    marginTop: 15
  },
  button: {
    height: 48,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 24,
    backgroundColor: '#BF74ED',
    borderRadius: 8,
  },
  buttonIcon: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B060E0',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  buttonText: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'ChelaOne',
    color: '#fff'
  },
  link: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 24,
    marginBottom: 8,
    marginRight: 16
  },
  textLink: {
    marginLeft: 4,
    fontFamily: 'Roboto_Black',
    color: '#747474'
  }
})

export default SingUp;