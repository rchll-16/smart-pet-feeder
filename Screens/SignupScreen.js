import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';
import React from 'react'

export default function Signuppage({navigation}) {

    const [fontsLoaded] = useFonts({
        'PoppinsRegular': require('../assets/Fonts/Poppins-Regular.ttf'),
        'PoppinsExtraBold': require('../assets/Fonts/Poppins-ExtraBold.ttf'),
        'PoppinsBold': require('../assets/Fonts/Poppins-Bold.ttf')
      });

      if (!fontsLoaded) {
        return null;
      }

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backIcon}>
            <Feather name="chevron-left" size={60} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Create an account</Text>

      <View style={{marginTop: 30}}>
        <View style={styles.email}>
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="black"  />
        </View>
        <View style={styles.email}>
          <TextInput style={styles.input} keyboardType="email-address" placeholder="Email" placeholderTextColor="black"  />
        </View>
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Re-enter Password" placeholderTextColor="black" secureTextEntry={true} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
          <Text style={styles.btntxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backIcon: {
      marginTop: 50,
      marginLeft: 10,
    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        color: 'black',
        marginTop: 70,
        paddingTop: -30,
        fontFamily: 'PoppinsBold',
        },

    input: {
        height: 68,
        width: 320,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 50,
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'PoppinsRegular',
        fontSize: 22,
        opacity: 0.5,
        },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        backgroundColor: '#6C87F6',
        width: 323,
        height: 56,
        borderRadius: 30,
        marginHorizontal: 45,
        },

    btntxt: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'PoppinsBold',
        },

    email: {
        flexDirection: 'row',
        alignItems: 'center',
        },
})
