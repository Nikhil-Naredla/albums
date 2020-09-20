import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import AlbumList from './components/AlbumList';
import AlbumListDetails from './components/AlbumListDetails';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App container">
      <Router>
       <Switch>
         <Route path='/' exact component={AlbumList} />
         <Route path='/details/:id' exact component={AlbumListDetails} />
       </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
