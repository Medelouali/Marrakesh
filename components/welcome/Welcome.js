import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function Welcome({navigation}) {
  return (
    <View styles={styles.container}>
      <Text>Welcome To Egest</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
        <View style={styles.button}>
          <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        </View>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    height:'100%',
  },
  buttons:{
    // flex: 1,
    justifyContent:'space-around',
    alignItems:'center',
  },
  button:{
    width:100,
    borderRadius:50,
    margin:15
  }
})