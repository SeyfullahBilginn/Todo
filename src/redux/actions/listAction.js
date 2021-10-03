import axios from 'axios'
import { db } from '../../../config'
// const axios = require('axios');
const addToList = (payload) => ({
    type: "ADD_LIST",
    payload: payload
})
const removeFromList = (payload) => ({
    type: "DEL_LIST",
    payload: payload
})

const changeCompleted = (payload) => ({
    type:"CHANGE_COMPLETED",
    payload: payload
})
const setList = (payload) => ({
    type: "SET_LIST",
    payload:payload
})

const fetchUsers = () => {
    return (dispatch) => {
        console.log("dispatch")
        dispatch(fetchUsersRequest())
        var todos = [];
        const myPromise = new Promise((resolve, reject) => {
            db.ref("/todos").once("value",function(child) {
                // todos.push(child.val())
                console.log("child:")
                child.forEach(todo => {
                    todos.push(todo.val())})
                console.log(child.val())
            })
            resolve(todos);
        }).then(res => {
            console.log("res: "+ res)
            dispatch(fetchUsersSuccess(res))
            
        }).catch(error => {
            dispatch(fetchUsersFailure(error.message))    
        });
        

        // axios.get('https://jsonplaceholder.typicode.com/todos')
        // .then(response => {
        //   // response.data is the users
        //     const users = response.data
        //     dispatch(fetchUsersSuccess(users))
        // })
        // .catch(error => {
        //   // error.message is the error message
        //     dispatch(fetchUsersFailure(error.message))
        // })
    }
    }

const fetchUsersRequest = () => {
    return {
        type: "FETCH_USERS_REQUEST"
    }
}

const fetchUsersSuccess = users => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: "FETCH_USERS_FAILURE",
        payload: error
}
}
export {addToList,removeFromList,fetchUsers,fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure,changeCompleted};