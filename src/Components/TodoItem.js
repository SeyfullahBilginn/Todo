import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, Dimensions, View, TouchableOpacity, CheckBox } from 'react-native';
import { changeCompleted, removeFromList } from "../redux/actions/listAction";
import { useDispatch, useSelector } from "react-redux";
const win = Dimensions.get("window")
import { db } from "../../config"
export default function TodoItem({ item }) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const [isSelected, setSelection] = useState();

    useEffect(() => {
        setSelection(item.completed)

    }, [])

    function del() {
        console.log("item: " + item)
        console.log(item)
        const valueToRemove = 'known id';
        
        const ref = db.ref('/todos');
        // ref.orderByValue().once("value").then(
            //     querySnapshot => {
                //         console.log("ccc")
                //         console.log(querySnapshot)
                //     }
                // )
                var query = ref.orderByChild("title").equalTo(item.title);
                query.once("value", function (snapshot) {
                    snapshot.forEach(function (child) {
                        child.ref.remove();
                    }) }).then(
                        dispatch(removeFromList(item))

                    )
                    // wishlistRef.orderByValue().equalTo(valueToRemove).once('value')
                    //     .then((querySnapshot) => {
                        //         if (!querySnapshot.hasChildren()) {
            //             return; // value not found. do nothing
            //         }

            //         const changesObject = {};

            //         querySnapshot.forEach((matchSnapshot) => {
            //             // here matchSnapshot.val() == valueToRemove, so mark it's key for deletion.
            //             changesObject[matchSnapshot.key] = null;
            //         });

            //         // commit any changes
            //         return wishlistRef.update(changesObject);
            //     })
            //     .then(() => {
            //         // if here, value was deleted successfully
            //     })
            //     .catch((error) => {
            //         // todo: handle any errors
            //     });
            // console.log("deletedItem. " + item.key + " " + item.text)7
            // db.ref("/todos").once("child_removed", function (child) {
            //     // todos.push(child.val())
            //     console.log("CHILD REMOVED")
            //     console.log(child)
            //     // var todos = [];
            //     // console.log("child:")
            //     // child.forEach(todo => {
            //     //   todos.push(todo.val())
            //     // })
            //     // console.log(child.val())
            //   })
            // db.ref("/todos").child.r.removeValue();


            // ref.child(rowId)

        }
    function change() {
                dispatch(changeCompleted(item))
                setSelection(!isSelected)
            }
    console.log("item")

    console.log(item)
    return (
            <TouchableOpacity style={{ backgroundColor: "white", justifyContent: "space-between", width: win.width - 20, borderWidth: 2, padding: 10, margin: 10, borderRadius: 6, flexDirection: "row" }}
                onPress={() => { console.log(item.completed) }}
                onLongPress={() => del()}
            >
                <View style={{ width: win.width - 80 }}>
                    <Text style={{ fontSize: 18 }}>{item.title}</Text>

                </View>
                <CheckBox
                    value={isSelected}
                    onChange={() => change()}
                />
            </TouchableOpacity>
        )
    }