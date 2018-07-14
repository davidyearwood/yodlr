import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from 'validator'; 

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: {
                value: '', 
                hasError: true,
                message: 'This field is required.'
            },
            lastName: {
                value: '',
                hasError: true,
                message: 'This field is required.'
            }, 
            email: {
                value: '',
                hasError: true,
                message: 'This field is required.'
            },
            hasError: null,
            isSubmit: false, 
            isLoading: false
        };
        
        this.checkFirstNameValidity = this.checkFirstNameValidity.bind(this);
        this.checkLastNameValidity = this.checkLastNameValidity.bind(this);
        this.checkEmailValidity = this.checkEmailValidity.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    }
    
    update(stateName, e) {
        this.setState({
            [stateName]: {
                ...this.state[stateName],
                value: e.target.value
            }
        });
    }
    
    updateFirstName(e) {
        this.update("firstName", e); 
    }
    
    updateLastName(e) {
        this.update("lastName", e);
    }
    
    updateEmail(e) {
        this.update("email", e);
    }
    
    postData(url, data) {
        return fetch(url, {
            method: "POST", 
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => this.setState({hasError: error}));
    }
    
    registerUser(e) {
        e.preventDefault(); 
        
        // if any fields are empty disable button
        this.checkFirstNameValidity(); 
        this.checkLastNameValidity();
        this.checkEmailValidity();
        
        let userData = {
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            email: this.state.email.value
        };
        
        if (!this.state.firstName.hasError && !this.state.lastName.hasError && !this.state.email.hasError) {
            this.postData("/users", userData)
                .then(response => { console.log(response); });
        } else {
            console.error(this.state.firstName.message);
            console.error(this.state.lastName.message);
            console.error(this.state.email.message);
        }
    }
    
    // Updates email state message and hasError property according to what the user inputs
    checkEmailValidity() {
        let email = this.state.email.value;
        let message = '';
        let hasError = false; 
        
        if (!validator.isEmail(email)) {
            message = 'Invalid email.'; 
            hasError = true; 
        }
        
        if (validator.isEmpty(email)) {
            message = 'Email field is required.'
            hasError = true; 
        }
        
        this.setState({
            email: {
                ...this.state.email,
                message: message, 
                hasError: hasError
            }
        });
    }
    
    checkLastNameValidity() {
        let lastName = this.state.lastName.value; 
        let message = '';
        let hasError = false; 
    
        if (!validator.isAlphanumeric(lastName)) {
            message = 'Last name can only include alphanumeric characters.';
            hasError = true; 
        }
        
        if(validator.isEmpty(lastName)) {
            message = 'Last name field is required.';
            hasError = true; 
        }
        
        this.setState({
            lastName: {
                ...this.state.lastName,
                message: message, 
                hasError: hasError
            }
        });
    }
    
    checkFirstNameValidity() {
        var firstName = this.state.firstName.value; 
        var message = '';
        var hasError = false; 
        
        if (!validator.isAlphanumeric(firstName)) {
            message = 'First name can only include alphanumeric characters.';
            hasError = true; 
        }
        
        if(validator.isEmpty(firstName)) {
            message = 'First name is required.';
            hasError = true; 
        }
        
        this.setState({
            firstName: {
                ...this.state.firstName,
                message: message, 
                hasError: hasError
            }
        });
        
    }
    
    render() {
        return (
            <form onSubmit={this.registerUser} noValidate>
                <Input clasName="first-name"
                    name="firstName"
                    usersInput={this.state.firstName.value}
                    onChange={this.updateFirstName}
                    onBlur={this.checkFirstNameValidity}
                    labelText="First Name:"
                />
                <Input 
                    labelText="Last Name:"
                    clasName="last-name"
                    name="lastName"
                    onBlur={this.checkLastNameValidity}
                    usersInput={this.state.lastName.value}
                    onChange={this.updateLastName}
                />
                <Input 
                    className="email"
                    name="email"
                    labelText="Email: "
                    onChange={this.updateEmail}
                    onBlur={this.checkEmailValidity}
                    usersInput={this.state.email.value}
                    type="email"
                />
                <button type="submit" className="btn">Submit</button>
            </form>
        );
    }
} 

export default Register;  
