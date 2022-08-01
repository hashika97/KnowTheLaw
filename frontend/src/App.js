import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider, GlobalState} from './GlobalState'
import Header from './Components/Headers/Header'
import MainPages from './Components/MainPages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header/>
          <MainPages/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
