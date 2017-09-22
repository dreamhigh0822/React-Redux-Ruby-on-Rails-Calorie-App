import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './redux/store'
import Signin from './containers/signin'
import Signup from './containers/signup'
import Dashboard from './containers/dashboard'

export default () => (
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Router>
        <div>
          <Route path='/' exact component={Dashboard} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </div>
      </Router>
    </div>
  </Provider>
)