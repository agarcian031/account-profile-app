import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AccountConsumer } from "../providers/AccountProvider";

const Navbar = () => (
  <AccountConsumer>
    {(value) => (
      <Menu>
        <NavLink to="/">
          <Menu.Item>Home</Menu.Item>
        </NavLink>
        <NavLink to="/account/profile">
          <Menu.Item>
            {/* TODO: Will be replaced with the actual user name */}
            {/* Username */}
            {value.username}
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </AccountConsumer>
);

export default Navbar;
