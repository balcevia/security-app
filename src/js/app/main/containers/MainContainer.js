import React from 'react';
import Navigation from "../../navigation/Navigation";
import '../components/Main.scss';
import {Switch} from "react-router";
import {bindActionCreators} from "redux";
import mainOperations from '../duck/operations';
import {connect} from 'react-redux';
import SecureRoute from "../../common/SecureRoute";
import FileListContainer from "./FileListContainer";
import UploadContainer from "./UploadContainer";
import ActivityContainer from "./ActivityContainer";

class MainContainer extends React.PureComponent {

  componentDidMount = () => {
    this.props.mainOperations.fetchFileList()
  };

  render = () => (
    <div className="main-container">
      <Navigation/>
      <Switch>
        <SecureRoute exact path="/main/file-list" component={FileListContainer}/>
        <SecureRoute exact path="/main/upload" component={UploadContainer}/>
        <SecureRoute exact path="/main/activity" component={ActivityContainer}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => ({
  files: state.main.fileList
});

const mapDispatchToProps = (dispatch) => ({
  mainOperations: bindActionCreators(mainOperations, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);