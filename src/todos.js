import React,{useEffect,useState} from 'react';
import { StyleSheet,ScrollView,SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';
import { addToList, fetchUsers} from "./redux/actions/listAction";
import {useDispatch, useSelector} from "react-redux";
import TodoItem from './Components/TodoItem';
import addIcon from "./assets/icons/add-2.png"
import { connect } from 'react-redux'
import {db}  from '../config';
//changed
export default function Todos({navigation}) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    
    const [todos, settodos] = useState()

    useEffect(() => {
        // const ref = db.ref("todos");
        // console.log(ref)
        // fetchUsers();
        settodos(state.list.todos);
        // console.log("effect")
        // console.log("todos")
        // console.log(state.list.todos[0])
        // console.log(userData.uesrs)
    }, [])
    console.log("todos")
    return state.list.loading ? (
        <View>
            <Text>Loading</Text>
        </View>
      ) : state.list.error ? (
          <View>
              <Text>{state.list.error}</Text>

          </View>
      ) : (
        <View style={{flex:1}}>
          <Text>Users List</Text>
          {/* <Text>{userData.users.length}</Text> */}
          <ScrollView>
          <Text>{state.list.todos.length}</Text>
            {
              
              state.list.todos.map((todo) =>
              {
                  return(
                    <View style={{flexDirection:"row"}} key={todo.id}>
                        <TodoItem item={todo}/>
                    </View>
  
                  )

              }
              )
                }
            {/* {
                state.list.newItem.map((item) => {
                    return(
                        // <Text>{item.text}</Text>
                        <TodoItem item={item}/>
                    )
                })
            }  */}
          </ScrollView>
            <TouchableOpacity
            style={{
                elevation:6, position:"absolute", bottom:10,
                borderRadius:35,
                
                alignSelf:"center", justifyContent:"center", alignItems:"center",
                alignContent:"center",
                width:70,height:70,
                opacity:0.9,
                backgroundColor:"red",
                // justifyContent:"center",alignItems:"center"
            }}
            onPress={() => {
                navigation.navigate("addTodo")
            }}
            >
                <Image source={addIcon} style={{tintColor:"white",height:50,width:50}}/>
            </TouchableOpacity>
        </View>
      )
    }


const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
  