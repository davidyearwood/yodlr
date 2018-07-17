import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import validator from 'validator'; 
import TextField from './TextField';
import EmailField from './EmailField';
import Message from './Message';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: {
                value: '', 
                hasError: true,
                message: ''
            },
            lastName: {
                value: '',
                hasError: true,
                message: ''
            }, 
            email: {
                value: '',
                hasError: true,
                message: ''
            },
            inputClass: 'text-field__input',
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
            this.setState({
                isSubmit: true
            }); 
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
        let className = 'text-field__input';
        if (!validator.isEmail(email)) {
            message = 'Invalid email.'; 
            hasError = true; 
            className = className + ' ' + 'text-field__input--error';
        }
        
        if (validator.isEmpty(email)) {
            message = 'Email field is required.'
            hasError = true; 
            className = className + ' ' + 'text-field__input--error';
        }
        
        this.setState({
            email: {
                ...this.state.email,
                message: message, 
                hasError: hasError
            },
            inputClass: className
        });
    }
    
    checkLastNameValidity() {
        let lastName = this.state.lastName.value; 
        let message = '';
        let hasError = false; 
        let className = 'text-field__input';
        
        if (!validator.isAlphanumeric(lastName)) {
            message = 'Last name can only include alphanumeric characters.';
            hasError = true; 
            className = className + ' ' + 'text-field__input--error';
        }
        
        if(validator.isEmpty(lastName)) {
            message = 'Last name field is required.';
            hasError = true; 
            className = className + ' ' + 'text-field__input--error';
        }
        
        this.setState({
            lastName: {
                ...this.state.lastName,
                message: message, 
                hasError: hasError
            },
            inputClass: className
        });
    }
    
    checkFirstNameValidity() {
        var firstName = this.state.firstName.value; 
        var message = '';
        var hasError = false; 
        var className = 'text-field__input'
        
        if (!validator.isAlphanumeric(firstName)) {
            message = 'First name can only include alphanumeric characters.';
            hasError = true;
            className = className + ' ' + 'text-field__input--error';
        }
        
        if(validator.isEmpty(firstName)) {
            message = 'First name is required.';
            hasError = true; 
            className = className + ' ' + 'text-field__input--error';
        }
        
        this.setState({
            firstName: {
                ...this.state.firstName,
                message: message, 
                hasError: hasError
            },
            inputClass: className
        });
        
    }
    
    render() {
        let regForm = (
           <form onSubmit={this.registerUser} noValidate>
                <TextField 
                    id="first-name"
                    value={this.state.firstName.value}
                    onChange={this.updateFirstName}
                    onBlur={this.checkFirstNameValidity}
                    labelText="First Name:"
                    inputClassName={this.state.inputClass}
                />
                <TextField 
                    id="last-name"
                    value={this.state.lastName.value}
                    onChange={this.updateLastName}
                    onBlur={this.checkLastNameValidity}
                    labelText="Last Name:"
                    inputClassName={this.state.inputClass}
                />
                <EmailField
                    id="email"
                    labelText="Email: "
                    onChange={this.updateEmail}
                    onBlur={this.checkEmailValidity}
                    value={this.state.email.value}
                    inputClassName={this.state.inputClass}
                />
                { this.state.firstName.hasError || this.state.lastName.hasError || this.state.email.hasError ? (
                    <button type="submit" className="btn" disabled>Submit</button>
                ) : (
                    <button type="submit" className="btn">Submit</button>
                )}
            </form>  
        );
        
        let submit = (<h1>{this.state.firstName.value} that wasn't too bad? Right :D </h1>);
        let app = this.state.isSubmit ? submit : regForm; 
        
        return (
            <div> 
                {app}
            </div>
        );
    }
} 

export default Register;  
