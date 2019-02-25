import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Field, reduxForm } from 'redux-form';
import reduxFormText from './reduxFormTextbox'
import validation from './validations';
import store from './store';
import {connect} from 'react-redux'
class App extends Component {
  constructor(){
    super();
    this.fnReg=this.fnReg.bind(this);
  }
  fnReg(dataObj) {
    store.dispatch({
      'type':'REG',
      'payload':dataObj,
      'reset':this.props.reset
    })
  }
  render() {
    return (
      <div className="App container-fluid">
        <form onSubmit={this.props.handleSubmit(this.fnReg)}>
          <Field
            type="text"
            name="uid"
            l="User Name"
            component={reduxFormText}
          />
          <Field
            type="password"
            name="pwd"
            l="Password"
            component={reduxFormText}
          />
          <Field
            type="text"
            name="email"
            l="Email"
            component={reduxFormText}
          />
          <Field
            type="text"
            name="phone"
            l="phone"
            component={reduxFormText}
          />
          <div class="row">
            <div className="offset-sm-5 col-sm-7">
              <input disabled={this.props.invalid} className="btn btn-primary" type="submit" value="register" />
            </div>
          </div>
          <div class="row">
            <div className="col-sm-12 text-center">
                <b>{this.props.msg}</b>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

App = reduxForm({
  'form': 'registerForm',
  validate:validation
})(App)
const mapStateToProps=(state)=>{
  return {
    'msg':state.reduxFormReducer.msg
  }
}
export default connect(mapStateToProps)(App);
