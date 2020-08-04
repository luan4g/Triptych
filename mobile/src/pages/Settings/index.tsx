import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function Settings() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Settings
        </Text>
      </View>
      <View style={styles.settings}>
        <View style={styles.selection}>
          <Text style={styles.selectionText}>Account</Text>
        </View>
        <View style={styles.selection}>
          <Text style={styles.selectionText}>About Us</Text>
        </View>
        <View style={[styles.selection, styles.logOutCont]}>
          <Text style={styles.logOut}>LogOut</Text>
          <FontAwesome5 name="sign-out-alt" size={16} color="#F17A7A" />
        </View>
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
  settings: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selection: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  selectionText: {
    fontSize: 16,
    fontFamily: 'Roboto_Bold',
    color: '#000',
  },
  logOut: {
    fontSize: 16,
    fontFamily: 'Roboto_Bold',
    color: '#F17A7A',
    marginRight: 8,
  },
  logOutCont: {
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export default Settings;