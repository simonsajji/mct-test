import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {HashRouter} from 'react-router-dom';
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";


const store = createStore(reducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
     
        	<App />

    	</Provider>
		
	</React.StrictMode>,
	document.getElementById('root')
);
