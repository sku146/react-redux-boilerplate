// @flow
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ApplicationActions } from 'actions';
import {
  LandingPage,
} from 'components';

const mapStateToProps = state => ({
  exampleList: state.application.exampleList,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    application: bindActionCreators(ApplicationActions, dispatch),
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));
