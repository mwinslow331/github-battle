import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

it('renders battle friends title', () => {
  const wrapper = shallow(<Home />);
  const welcome = <h1>Battle Your Friends and...Stuff</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
