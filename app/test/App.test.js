import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Nav from '../components/Nav';

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
});
