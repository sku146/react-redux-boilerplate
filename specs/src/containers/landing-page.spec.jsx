import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from 'containers/landing-page';
import configureMockStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';

describe('Landing Page', () => {
  const createMockStore = configureMockStore();
  const state = {
    application: {
      exampleList: ['test', 'test1'],
    },
  };
  const ShallowComponent = () => {
    const store = createMockStore(state);
    const context = createRouterContext();
    return shallow(<LandingPage store={store}/>).shallow({ context }).shallow();
  };

  describe('render', () => {
    it('component should render a LandingPage component', ()=> {
      const component = ShallowComponent();
      expect(component.find('LandingPageComponent')).toHaveLength(1);
    });
  });
});
