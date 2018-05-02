import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import Battle from '../components/Battle';
import {PlayerInput} from '../components/Battle';

describe('PlayerInput', () => {
  it('renders', () => {
    const wrapper = shallow(<PlayerInput submit={() => {}} />);
    expect(wrapper).toBeTruthy();
  });
});


describe('<PlayerInput />', () => {
  const onSubmit = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PlayerInput onSubmit={onSubmit} />);
  });
  it('updates state on input change', () => {
    wrapper.find('form').simulate('submit', {
      target: { value: 'mwinslow331'},
      preventDefault: () => {}
    });
  expect(onSubmit).toHaveBeenCalled();
  });
});

// it('calls props.onSubmit on onSubmit', () => {
//   const handleChange = jest.fn();
//   const wrapper = shallow(<PlayerInput onChange={handleChange} />).get(0);
//
//   expect(wrapper.find('input')).instance().value = 'mwinslow331';
//   expect(wrapper.find('button')).simulate('onClick');
  // wrapper.find('form').instance().value = "mwinslow331";
  // expect(onSubmit).toHaveBeenCalled();
// });
