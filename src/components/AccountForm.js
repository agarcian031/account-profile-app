import React, { Component } from 'react'; 
import {Form} from 'semantic-ui-react';

export class AccountForm extends Component {
  state = { username: "", membershipLevel: ""}

  handleChange = (e, {name, value}) => {
      this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault(); 

  }

  render() {
    const {username, membershipLevel} = this.state; 
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username" //will match state 
          value={username} //username from state 
          onChange={this.handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions} //will eventually pass in an array of options
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

// Array of options for the Form.Select. 
// because it is outside, it does not belong to the class and you don't have to type this.[function]. 
const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];


export default AccountForm;
