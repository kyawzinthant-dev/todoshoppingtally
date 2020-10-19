import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Shopping from './components/shopping/Shopping';
import Tally from './components/tally/Tally';
import Todo from './components/todo/Todo';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './components/container/Container';

import reducer from './redux/rootReducer/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import Number from './components/numbersapi/Number';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));



console.log(store.getState());

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
          <Nav/>

          <Container>
            <Route path="/todo">
              <Todo/>
            </Route>

          <Route path="/shopping">
              <Shopping/>
            </Route>

            <Route path="/tally">
              <Tally/>
            </Route>

            <Route path="/number">
              <Number/>
            </Route>
          </Container>
        
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
