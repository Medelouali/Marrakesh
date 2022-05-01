import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SignUp page</Text>
      <View style={styles.button}>
        <Button title="Create Account" onPress={() => navigation.navigate('Home')} />
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
    button:{
        width:100,
        borderRadius:50,
        margin:15
      }

})