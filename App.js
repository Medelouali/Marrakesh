import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import Navigator from './routes/stack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
  },
  
});
