import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Segment,
  Button,
  List,
} from 'semantic-ui-react';
import map from 'lodash/map';
import { getResource } from 'copies/appJourney';

class LandingPage extends Component {
  componentDidMount() {
    this.props.actions.application.applicationStarted();
    this.props.apiActions.exampleList.fetchExampleList();
  }

  render() {
    const {
      exampleList,
    } = this.props;

    return (
      <div className="landing-page">
        <Header as="h1" data-bdd-selector="landingHeader">
          {getResource('landingPage.header')}
        </Header>
        <Segment>
          <Header as="h2" data-bdd-selector="subHeader">{getResource('landingPage.subHeader')}</Header>
          <Button primary data-bdd-selector="primaryButton">{getResource('landingPage.button.primary')}</Button>
          <Button secondary data-bdd-selector="secondaryButton">{getResource('landingPage.button.secondary')}</Button>
        </Segment>
        <Header as="h2" data-bdd-selector="routeHeader">{getResource('landingPage.routeHeader')}</Header>
        <List>
          {exampleList && map(exampleList, (item, idx) => (
            <List.Item key={`item-${idx}`}>{item}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

LandingPage.propTypes = {
  actions: PropTypes.object,
  apiActions: PropTypes.object,
  exampleList: PropTypes.array,
};

LandingPage.defaultProps = {
  actions: {},
  apiActions: {},
  exampleList: [],
};

export default LandingPage;
