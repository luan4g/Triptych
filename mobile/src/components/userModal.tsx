import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { LinearGradient } from 'expo-linear-gradient'

interface Props {
  open: boolean,
  changevisible: () => void
}

const UserModal: React.FC<Props> = ({ open, changevisible }) => {
  return(
    <Modal 
          isVisible={open}
          hasBackdrop={true}
          backdropOpacity={0}
          onBackButtonPress={changevisible}
          onSwipeComplete={changevisible}
          swipeDirection={['left','up', 'right']}
          animationIn="fadeInDown"
          animationOut="fadeInUp"
          style={{margin: 0}}
        >
          <View style={styles.modal}>
            <View style={styles.modalUser}>
              <LinearGradient style={styles.userIcon} colors={["#64BDEF", '#47EED0']} />
              <TextInput 
                style={styles.searchUser} 
                placeholder="type some user..."
              />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userBio} numberOfLines={5}>
                Nothing Care
              </Text>
              <View style={styles.userPics}>
                <Text style={styles.picsTitle}>
                  Pics
                </Text>
                <Text style={styles.picsValue}>
                  1
                </Text>
              </View>
            </View>
          </View>
        </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    width: '100%',
    justifyContent: 'center',
    margin: 0,
    backgroundColor: '#fff',
    elevation: 3,
  },
  modalUser: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userIcon: {
    height: 48,
    width: 48,
    margin: 8,
    borderRadius: 24,
  },
  searchUser: {
    height: 40,
    width: '80%',
    padding: 8,
    marginRight: 'auto',
    borderRadius: 8,
    backgroundColor: '#EEEEEE',
    fontFamily: 'Roboto_BoldI',
  },
  searchIcon: {
    margin: 8,
  },
  userInfo: {
    width: '100%',
    flexDirection: 'row',
    margin: 8,
  },
  userBio: {
    width: '60%',
    padding: 8,
    flexDirection: 'column',
    fontFamily: 'Roboto_BoldI',
  },
  userPics: {
    width: '35%',
    alignItems: 'center',
  },
  picsTitle: {
    fontSize: 24,
    fontFamily: 'Roboto_Black',
    color: '#8b8b8b'
  },
  picsValue: {
    fontSize: 24,
    fontFamily: 'Roboto_Black'
  },
  icon: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: '#fff'
  }
})

export default UserModal;