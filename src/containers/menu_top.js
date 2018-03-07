import React from "react";
import { connect } from "react-redux";
import { Container, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const TopMenu = ({user}) => (
  <Menu fixed="top" color="teal" inverted>
    <Container>
      <Menu.Item as="a" header>
        <Icon name="inr" />Time Sheet
      </Menu.Item>
      <Menu.Item as={NavLink} to="/" exact>
        <Icon name="dashboard" />Dashboard
      </Menu.Item>
      <Menu.Item as={NavLink} to="/data">
        <Icon name="database" />Data
      </Menu.Item>
      <Menu.Menu position='right'>
        {user._id && <Menu.Item name="logout" />}
      </Menu.Menu>
    </Container>
  </Menu>
);

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(TopMenu);