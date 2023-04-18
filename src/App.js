
import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Sukses } from './pages'
import Welcome from './components/Welcome';
import LogPesanan from './components/LogPesanan';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <main>
            <Switch>
              <Route  path="/" component={Welcome} exact/>
              <Route  path="/main" component={Home} exact/>
              <Route  path="/log" component={LogPesanan} exact/>
              <Route  path="/sukses" component={Sukses} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
