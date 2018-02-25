import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers/root-reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App/App';
import './reset.css';
import { Container } from './components/Container/Container';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
  Container.favUpdater({user: store.getState().user});
});

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);
registerServiceWorker();
