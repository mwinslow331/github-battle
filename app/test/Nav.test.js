import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';
import renderer from 'react-test-renderer';
import { NavLink, Link } from 'react-router-dom';


describe('<Nav />', () =>  {
  it('renders a Home link', () => {
    const wrapper = shallow(<Nav />);
    const home = <NavLink exact to='/'>Home</NavLink>
    expect(wrapper.contains(home)).toEqual(true);
  });
  it('renders a Battle link', () => {
    const wrapper = shallow(<Nav />);
    const battle = <NavLink to='/battle'>Battle</NavLink>;
    expect(wrapper.contains(battle)).toEqual(true);
  });
  it('renders a Popular link', () => {
    const wrapper = shallow(<Nav />);
    const popular = <NavLink to='/popular'>Popular</NavLink>;
    expect(wrapper.contains(popular)).toEqual(true);
  });
});
