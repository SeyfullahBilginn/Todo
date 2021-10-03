import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {createAppContainer} from 'react-navigation'; 
// import {createStackNavigator} from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import addTodo from './addTodo';
import todos from './todos';

import {useDispatch, useSelector} from "react-redux";
import {db}  from '../config';
import { fetchUsers, removeFromList } from './redux/actions/listAction';

export default function Navigation() {  
    const dispatch = useDispatch();
    const state = useSelector((state) => state)



    useEffect(() => {
        console.log("USE EFFECT")
        dispatch(fetchUsers())
        
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="todos" component={todos} />
                <Stack.Screen name="addTodo" component={addTodo} />
            
            </Stack.Navigator>
        </NavigationContainer>

    )
}