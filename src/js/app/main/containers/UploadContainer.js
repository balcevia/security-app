import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import mainOperationCreators from '../duck/operations';
import UploadFile from "../components/UploadFile";

class UploadContainer extends React.PureComponent {

  componentDidMount = () => {
    this.props.mainOperations.fetchUsers()
  };

  render = () => (
    <UploadFile users={this.props.users} onSubmit={this.props.mainOperations.uploadFile}/>
  )
}

const mapStateToProps = (state) => ({
  users: state.main.users
});

const mapDispatchToProps = (dispatch) => ({
  mainOperations: bindActionCreators(mainOperationCreators, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer)