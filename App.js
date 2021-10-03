import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from "react-redux"
import store from "./src/store"
import { db } from "./config"
export default function App() {

  // db.ref("/todos").once("value", function (child) {
  //   // todos.push(child.val())
  //   var todos = [];
  //   console.log("child:")
  //   child.forEach(todo => {
  //     todos.push(todo.val())
  //   })
  //   console.log(child.val())
  // })

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
