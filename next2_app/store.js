import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

//Firebaseの設定
var config = {
    apiKey: "AIzaSyAPhW4jRrGovsHnKfrEJxSZSa0AaYY2kRc",
    authDomain: "next2-app.firebaseapp.com",
    databaseURL: "https://next2-app.firebaseio.com",
    projectId: "next2-app",
    storageBucket: "next2-app.appspot.com",
    messagingSenderId: "739507604839",
    appId: "1:739507604839:web:333abed012d7062d4673c2",
    measurementId: "G-XPV75WCDBX"
  };

//firebase初期化
var fireapp;
try {
    fireapp = firebase.initializeApp(config);
}catch(error){
    console.log(error.message);
}
export default fireapp;


//ステート初期値
const initial = {
    login: false,
    username: '(click here!)',
    email: '',
    data: [],
    items: []
}


//レデューサー
function fireReducer(state = initial,action){
    switch(action.type){
        //ダミー
        case 'UPDATE_USER':
            return action.value;
        
        default:
            return state;
    }
}

//initStore関数
export function initStore(state = initial){
    return createStore(fireReducer,state,applyMiddleware(thunkMiddleware))
}

