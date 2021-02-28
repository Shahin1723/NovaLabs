import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const SignInScreen = ({navigation}) => {

    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                   <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style = {styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style = {styles.action}>
                <TextInput 
                     placeholder="Enter Your Email"
                     styles = {styles.textInput}
                      autoCapitalize="none">
                </TextInput>
                </View>
            <Text style={styles.text_footer}>Password</Text>
            <View style = {styles.action}>
                <TextInput 
                     placeholder="Enter Your Password"
                     secureTextEntry = {true}
                     styles = {styles.textInput}
                      autoCapitalize="none" >
                </TextInput>
              </View>
            <View style={styles.button}>
                           <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                       <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}  >
                             <Text style={styles.textSign}>Sign In</Text>
                       </LinearGradient>
                    </TouchableOpacity>
          
            </View>
            <View style={styles.button}>
                           <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
                       <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}  >
                             <Text style={styles.textSign}>Sign Up</Text>
                       </LinearGradient>
                    </TouchableOpacity>
          
            </View>
            
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
