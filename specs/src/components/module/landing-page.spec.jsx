import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { LandingPageComponent } from 'components';

describe('Landing Page Component', () => {
  let defaultProps = {
    actions: {
      application: {
        applicationStarted: jest.fn()
      }
    },
    apiActions: {
      exampleList: {
        fetchExampleList: jest.fn(),
      },
    },
    exampleList: ['test', 'test1', 'test2'],
  };

  const ShallowComponent = (props) => {
    return shallow(<LandingPageComponent {...props} />);
  };

  const RendererComponent = (props) => {
    return renderer.create(<LandingPageComponent {...props} />);
  };

  describe('render', () => {
    it('component should render as expected', ()=> {
      const component = RendererComponent(defaultProps);
      expect(component).toMatchSnapshot();
    });
  });

  describe('componentDidMount', () => {
    it('should call applicationStarted action', () => {
      const component = ShallowComponent(defaultProps);
      component.instance().componentDidMount();
      expect(defaultProps.actions.application.applicationStarted).toHaveBeenCalled();
      expect(defaultProps.apiActions.exampleList.fetchExampleList).toHaveBeenCalled();
    });
  });
});
