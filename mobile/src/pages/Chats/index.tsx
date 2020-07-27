import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

const Chat = () => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Conversations
        </Text>
        <TouchableOpacity style={{marginRight: 24}}>
          <FontAwesome5 name="search" color="#3f3f3f" size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgUri
            height={20}
            width={20}
            uri="http://192.178.31.100:3333/uploads/sliders-h.svg"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.chatsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={styles.chat}>
            <View style={styles.photo} />
            <View style={{flexDirection: 'column', marginLeft: 8}}>
              <Text style={styles.chatName}>camila_castello</Text>
              <Text style={styles.chatMessage}>Mensagem da pessoa</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <View style={styles.chat}>
            <View style={styles.photo} />
            <View style={{flexDirection: 'column', marginLeft: 8}}>
              <Text style={styles.chatName}>JoHn_caStello</Text>
              <Text style={styles.chatMessage}>Mensagem da outra pessoa</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.chat}>
            <View style={styles.photo} />
            <View style={{flexDirection: 'column', marginLeft: 8}}>
              <Text style={styles.chatName}>soso_castello</Text>
              <Text style={styles.chatMessage}>Mensagem da outra da outra pessoa</Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 24,
    backgroundColor: '#fff',
    elevation: 5,
  },
  title: {
    marginRight: 'auto',
    fontSize: 16,
    fontFamily: 'Roboto_Bold'
  },
  chatsContainer: {
    flex: 1,
    height: 70,
    backgroundColor: '#fff',
  },
  chat: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
  },
  photo: {
    width: 60,
    height: 60,
    margin: 8,
    backgroundColor: '#33fe',
    borderRadius: 35,
  },
  chatName: {
    fontFamily: 'Roboto_Bold',
    marginBottom: 6
  },
  chatMessage: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Roboto_Black'
  }
})

export default Chat;