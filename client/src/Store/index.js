import { createStore,applyMiddleware, compose } from "redux";
import reducer from "../Reducer/index";
import  thunkMiddleware  from "redux-thunk";



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
// esta línea sive para conectar nuestra App con la extensión REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) 
    //esta línea sirve para que podamos hacer peticiones a una Api/servidor
);

    
export default store