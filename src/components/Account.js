import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
// import { AccountConsumer, } from "../providers/AccountProvider";
import { AccountContext } from "../providers/AccountProvider";

const Account = () => {
  const {username, dateJoined, membershipLevel} = useContext(AccountContext); 
  return (
    <Card>
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>Date Joined: {dateJoined}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level: {membershipLevel}</p>
      </Card.Content>
    </Card>
  );
};

export default Account;
