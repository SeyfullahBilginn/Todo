import React from 'react';
import { StyleSheet,SafeAreaView, Button, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {increaseNumber,decreaseNumber} from "./redux/actions/numberAction";
import { addToList} from "./redux/actions/listAction";
import {useDispatch, useSelector} from "react-redux";
import {db} from "../config";
export default function addTodo() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)

    const [text, onChangeText] = React.useState("");

    // console.log(state)
    // console.log("state list: " + state.list)
    return(
    <SafeAreaView >
            <TextInput
            placeholder="TODO"
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            />
        <View style={{flexDirection:"row"}}>
            <Text>add TODO</Text>
            {/* <Button title="INCREASE" onPress={() => {console.log("inc"); dispatch(increaseNumber())}} />
            <Text>{state.counter}</Text>
            <Button title="DECREASE" onPress={() => {console.log("inc"); dispatch(decreaseNumber())}} /> */}
            <Button title="listeye ekle" onPress={() => {
                db.ref('/todos').push({
                    title: text,
                }).then(
                    response => {
                        console.log("toString()")
                        dispatch(addToList(text.toString())); 
                        onChangeText("");
                    }
                );
                } } />

        </View>

    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  