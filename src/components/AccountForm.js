import React, { Component } from 'react'; 
import {Form} from 'semantic-ui-react';
import { AccountConsumer, } from "../providers/AccountProvider";


export class AccountForm extends Component {
  // state = { username: "", membershipLevel: ""}
  // with Provider: 
  state = { 
    username: this.props.username, 
    membershipLevel: this.props.membershipLevel, 
  };

  handleChange = (e, {name, value}) => {
      this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    // const account = { ...this.state, };
    // this.props.updateAccount(account);
    this.props.updateAccount({...this.state, });
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

// Using provider 
//*** */ Higher ordered component - will create a new component to render the AccountForm component and pass in props so that we can use them to have the information present on the form. Because we are rendering the AccountForm, we now have access to the data within the entire component. 
const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          // {...value} -- will also give you access to the dateJoined
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}


// export default AccountForm;
// when you import at the top of the page, it is going to that file and rendering the default export whatever you specify, so in this file, instead of rendering the Account Form automatically, it will render the Connected Account Form first. 
export default ConnectedAccountForm; 
