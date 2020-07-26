import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';


const Account = () => {
    const background = {
      uri: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }

  return(
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.userContainer}>
        <View style={{flexDirection: 'row'}}>
          <LinearGradient style={styles.userIcon} colors={["#64BDEF", '#47EED0']} />      
          <View style={styles.userInfo}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Pics</Text>
              <Text style={styles.infoContent}>1</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Following</Text>
              <Text style={styles.infoContent}>1</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Followers</Text>
              <Text style={styles.infoContent}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.userRest}>
          <View style={styles.userBio}>
            <Text style={styles.bio}>Nothing Care</Text>
          </View>
          <View style={styles.backPhoto}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="image-plus" color="#ddd" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.picsContainer}>
        <View style={styles.picsCard}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} style={styles.pics} />
        </View>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    paddingTop: 16,
    backgroundColor: '#fff',
  },
  userIcon: {
    height: 64,
    width: 64,
    margin: 16,
    borderRadius: 32
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  infoContainer: {
    padding: 16,
    alignItems: 'center',
  },
  infoTitle: {
    fontFamily: 'Roboto_Black',
    color: "#727272"
  },
  infoContent: {
    fontFamily: 'Roboto_Black'
  },
  userRest: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userBio: {
    width: '60%',
    margin: 16,
  },
  bio: {
    fontFamily: 'Roboto_BoldI',
  },
  backPhoto: {
    width: '30%',
    alignItems: 'center',
  },
  picsContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 24,
  },
  picsCard: {
    height: 128,
    width: 96,
    margin: 32,
    backgroundColor: '#fff',
    elevation: 7,
    transform: [{ rotate: `10deg` }],
  },
  pics: {
    height: 80,
    width: 80,
    margin: 8,
  }
})

export default Account;