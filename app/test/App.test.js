import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Nav from '../components/Nav';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the Nav Component', () => {
    expect(wrapper.containsMatchingElement(<Nav/>)).toEqual(true);
  });
  it('should have 5 Route components', () => {
    expect(wrapper.find(Route)).toHaveLength(5);
  });
  it('should contain a Switch component', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });
});
