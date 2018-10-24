import React, { Component } from 'react';
import './App.css';


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)


const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {val.length > 0 && (valid = false)
    });

      return valid;
  
  }




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }


  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      console.log(`
      -- Submitting--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `)
    } else {
      console.error('FORM INVALID -- ERROR')
    }
  }

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch(name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : "";
        break;
      case 'lastName' :
        formErrors.lastName = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : "";
        break;
      case 'email' :
        formErrors.email = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : "";
        break;
      case 'password' :
        formErrors.password = value.length < 6 && value.length > 0 ? 'minimum 6 characters required' : "";
        break;
      default:
        break;
      }
  }




  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create New Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                className="" 
                placeholder="First Name" 
                name="firstName" 
                noValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                className="" 
                placeholder="Last Name" 
                name="lastName" 
                noValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                className="" 
                placeholder="Email" 
                type="email"
                name="email" 
                noValidate
                onChange={this.handleChange}
              />

              <div className="password">
              <label htmlFor="password">Password</label>
              <input 
                type="text" 
                className="" 
                placeholder="Password" 
                type="password"
                name="password" 
                noValidate
                onChange={this.handleChange}
              />
            </div>
            </div>

            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account?</small>
            </div>
            
          
          </form>
        </div>
      


      </div>
    );
  }
}

export default App;
