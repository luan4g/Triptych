import React,{ useState } from 'react';   
import { StyleSheet, View, Text, Image, FlatList, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';

import UserModal from '../../components/userModal';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);
  
  const background = {
    uri: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }

  function toggleVisible() {
    setVisible(!visible);
    if(buttonOpacity == 1) {
      setButtonOpacity(0)
    } else {
      setButtonOpacity(1)
    }
  }

  function toggleDetailVisible() {
    setDetailVisible(!detailVisible);
  }
  
  const data = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1505201372024-aedc618d47c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
  ]

  return(
    <>
      <StatusBar hidden />
      <ImageBackground source={background} style={styles.container}>
        <RectButton style={[styles.buttonDown, {opacity: buttonOpacity}]} onPress={toggleVisible}>
          <View style={styles.buttonIcon}>
            <FontAwesome5 name="angle-down" color="#000" size={24} />
          </View>
        </RectButton>
        <UserModal open={visible} changevisible={toggleVisible} />
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} 
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.picsContainer}>
                  <TouchableOpacity activeOpacity={0.7} onPress={toggleDetailVisible}>
                    <View style={styles.picsCard}>
                      <Image source={{ uri: item.image }} style={styles.pics} />
                    </View>
                  </TouchableOpacity>
                </View>
            )}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
        <Modal
          isVisible={detailVisible}
          backdropOpacity={0.4}
          onBackButtonPress={toggleDetailVisible}
          onSwipeComplete={toggleDetailVisible}
          swipeDirection={['left','up', 'right']}
          animationOut="zoomOut"
          animationIn="zoomIn"
        >
         <View style={styles.picsZoomContainer}>
            <View style={styles.picsZoomCard}>
              <View style={styles.picsZoomDate}>
                <Text style={styles.picsZoomDateText}>5 de julho de 2020</Text>
              </View>
              <Image  style={styles.picsZoomImage} source={{uri: 'https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}} />
              <View style={styles.picsZoomDescription}>
                <Text>Akira_Acker</Text>
              </View>
            </View>
         </View>
        </Modal>
      </ImageBackground>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDown: {
    position: 'absolute',
    top: -28,
    height: 56,
    width: 56,
    backgroundColor: '#fff',
    borderRadius: 28,
    elevation: 5,
  },
  buttonIcon: {
    alignItems: 'center',
    marginTop: 27,
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
    borderWidth: 1,
    borderColor: '#fff'
  },
  pics: {
    height: 80,
    width: 80,
    margin: 8,
  },
  picsZoomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picsZoomCard: {
    width: '90%',
    backgroundColor: '#fff'
  },
  picsZoomDate: {
    marginHorizontal: 16,
    marginVertical: 8,
    marginLeft: 'auto',
  },
  picsZoomDateText: {
    fontSize: 10,
    color: "#999"
  },
  picsZoomImage: {
    width: '90%',
    height: '60%',
    marginHorizontal: 16,
    marginBottom: 16,
    alignSelf: 'center'
  },
  picsZoomDescription: {
    paddingHorizontal: 16,
  }
})

export default Home;