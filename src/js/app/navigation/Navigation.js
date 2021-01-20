import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Button, {ButtonType} from "../common/Button";
import {bindActionCreators} from "redux";
import loginOperationsCreator from '../login/duck/operations';
import {connect} from 'react-redux';

const Navigation = ({loginOperations}) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/main">App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/main/file-list">Main</Nav.Link>
      <Nav.Link href="/main/upload">Upload</Nav.Link>
      <Nav.Link href="/main/activity">Activity</Nav.Link>
    </Nav>
    <Button variant={ButtonType.Info} title="Logout" onClick={loginOperations.logout}/>
  </Navbar>
);

const mapDispatchToProps = (dispatch) => ({
  loginOperations: bindActionCreators(loginOperationsCreator, dispatch)
});

export default connect(null, mapDispatchToProps)(Navigation);