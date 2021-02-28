import React,{Component} from 'react'
import {Text,StyleSheet,View, Button,
 Image,TouchableOpacity,Dimensions, Alert,Platform} 
from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import logo from '../images/novalabs.png';

       const SplashScreen = ({navigation}) => {
          return (
              <View style = { styles.container }>  
                  <View style = { styles.header}>
                      <Image source={logo} alt="Logo" style={StyleSheet.absoluteFill}
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                  </View>   
                  <Animatable.View style = { styles.footer} animation="fadeInUpBig">
                      <Text style={styles.title}>Welcome to the world of NovaLabs!</Text>
                      <Text style={styles.text}>Sign in with account</Text>
                       <View style={styles.button}>
                       <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                       <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}  >
                             <Text style={styles.textSign}>Get Started</Text>
                       </LinearGradient>
                    </TouchableOpacity>
                    </View>
                  </Animatable.View>            
               </View>  
        );
    };

export default SplashScreen;

const {height} = Dimensions.get("screen");


const styles = StyleSheet.create({
    container: {
    flex: 1, 
    backgroundColor: 'black'
  },
  header: {
      flex: 2.3,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 0.7,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
    signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  }   
});

