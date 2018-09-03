import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
// import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers/reducer';

const store = createStore(appReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
