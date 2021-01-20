import React from 'react';
import '../components/Main.scss';
import FileList from "../components/FileList";
import {bindActionCreators} from "redux";
import mainOperations from '../duck/operations';
import modalOperations from '../../common/modal/duck/operations';
import {connect} from 'react-redux';
import {ModalNames} from "../../constants";
import KeyForm from "../components/KeyForm";
import Modal from "../../common/modal/Modal";

class FileListContainer extends React.PureComponent {

  componentDidMount = () => {
    this.props.mainOperations.fetchFileList()
  };

  downloadFile = (row) => {
    if(row.shouldEncrypt) {
      this.props.modalOperations.showModal(ModalNames.Key, row)
    } else {
      this.props.mainOperations.downloadFile(row.fileName, row.id)
    }
  };

  render = () => (
    <div className="main-container">
      <FileList data={this.props.files} downloadFile={this.downloadFile}/>
      <Modal
        name={ModalNames.Key}
        title="Please enter your key"
        component={KeyForm}
        size="lg"
        onSave={this.props.mainOperations.downloadFileFromDialog}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  files: state.main.fileList
});

const mapDispatchToProps = (dispatch) => ({
  mainOperations: bindActionCreators(mainOperations, dispatch),
  modalOperations: bindActionCreators(modalOperations, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileListContainer);