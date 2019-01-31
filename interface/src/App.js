import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  //GET http://locationsng-api.herokuapp.com/api/v1/lgas



  render() {
    return (
      <div className="container">
        <h2 className="pt-3 text-center">Login</h2>
        <form>
          <div class="input-group mb-3 input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text">Email Address</span>
            </div>
            <input type="email" class="form-control" id="Input1" placeholder="name@example.com"/>
          </div>

          <div class="input-group mb-3 input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text">Password</span>
            </div>
            <input type="password" class="form-control" id="Input1" placeholder="name@example.com"/>
          </div>
        </form> 
      </div>
    );
  }
}

export default App;
