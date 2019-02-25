import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './Store';
import Jumbotron from './components/layouts/Jumbotron';
import Footer from './components/layouts/Footer';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Jumbotron />
            <div className="container marketing">
              <div className="row">
                <Button1 />
                <Button2 />
                <Button3 />
              </div>
            </div>
          <Footer />
        </div>
      </Provider>
    ); 
  }
}

export default App;
