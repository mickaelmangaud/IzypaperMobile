import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar style="auto" />

      <View style={styles.view1}>
        <Text>My View1</Text>
      </View>

      <View style={styles.view2}>
        <Text>My View1</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  view1: {
    flex: 1,
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'center',
  }
})