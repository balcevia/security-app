import React from 'react';
import {connect} from 'react-redux';
import ActivityTable from "../components/ActivityTable";
import {bindActionCreators} from "redux";
import mainOperations from "../duck/operations";
import '../components/Main.scss';

class ActivityContainer extends React.PureComponent {
  componentDidMount = () => {
    this.props.mainOperations.fetchActivity();
  };

  render = () => (
    <div className="main-view-container">
      <ActivityTable data={this.props.data}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.main.activity
});

const mapDispatchToProps = (dispatch) => ({
  mainOperations: bindActionCreators(mainOperations, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer)