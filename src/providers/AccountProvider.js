import React, {Component} from 'react';

// Set up the initial context 
// will create the context and just assign it to the Account Context variable. 
// three parts of Context API -createContext -Provider -Consumer
// Provider will supply the information that will be used by additional components. 
// Consumer will use the data initialized in the Provider and will then have the data be accessible. 
const AccountContext = React.createContext(); 

// create an exportable consumer that can be injected into other components
export const AccountConsumer = AccountContext.Consumer; 


// Create the provider using a traditional React.Component Class. 
class AccountProvider extends Component {
  state = {
    username: "Fooman77", 
    dateJoined: "12/18/18", 
    membershipLevel: "Silver", 
    updateAccount: (account) => this.updateAccount(account),
  }

  // needs to be put in state for it to be available throughout your application. 
  updateAccount = (account) => {
    this.setState({...account})
  }

  render() {
    return (
      <AccountContext.Provider value={this.state}>
      { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider; 