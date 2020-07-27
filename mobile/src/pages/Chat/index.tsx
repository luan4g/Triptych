import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons';

const Chat = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  return(
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding': 'height'} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <View style={styles.chatPhoto} />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginRight: 'auto'}}>
          <Text style={styles.chatName}>camila_castello</Text>
          <Text style={styles.chatStatus}>online</Text>
        </View>
        <TouchableOpacity style={{marginRight: 24}}>
          <FontAwesome5 name="search" color="#3f3f3f" size={18} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="ellipsis-v" color="#3f3f3f" size={18} />
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={styles.messageBox}>
          <View style={styles.otherMessages}>
            <View style={styles.otherPhoto} />
            <View style={{width: '60%'}}>
              <Text style={[styles.message, styles.other]}>Hellou</Text>
            </View>
          </View>
          <View style={styles.mineMessages}>
            <View style={{width: '60%'}}>
              <Text style={[styles.message, styles.mine]}>Hi!!, Hru?</Text>
            </View>
            <View style={styles.minePhoto} />
          </View>
      </View>
      </ScrollView>
      <View style={styles.inputView}>
        <TextInput multiline numberOfLines={5} onChangeText={text => setMessage(text)} value={message} style={styles.input} placeholder="Type your message..." />
        <TouchableOpacity style={styles.inputButton}>
          <SvgUri
            height={24}
            width={24}
            uri="http://192.178.31.100:3333/uploads/rocket.svg"
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    elevation: 5,
  },
  chatPhoto: {
    height: 55,
    width: 55,
    marginRight: 16,
    backgroundColor: '#33fc',
    borderRadius: 50,
  },
  chatName: {
    fontFamily: 'Roboto_Black'
  },
  chatStatus: {
    fontSize: 12,
    color: '#50D997'
  },
  messageBox: {
    flex: 1,
    margin: 8,
    paddingBottom: 64,
    paddingTop: 16,
  },
  otherPhoto: {
    width: 48,
    height: 48,
    backgroundColor: '#33fc',
    borderRadius: 24,
  },
  minePhoto: {
    width: 48,
    height: 48,
    backgroundColor: '#333f3e',
    borderRadius: 24,
  },
  otherMessages: {
    flexDirection: 'row',
    marginRight: 'auto',
    marginBottom: 8,
  },
  mineMessages: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginBottom: 8,
  },
  message: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  other: {
    marginRight: 'auto',
    backgroundColor: '#c6c6c6'
  },
  mine: {
    marginLeft: 'auto',
    backgroundColor: '#e0e0e0',
  },
  inputView: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 8,
    bottom: 8,
    right: 8,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    backgroundColor: '#fff',
    fontFamily: 'Roboto_BoldI',
    elevation: 3,
  },
  inputButton: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#242424',
    elevation: 3
  }
})

export default Chat;