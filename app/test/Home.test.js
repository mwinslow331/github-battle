import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';
import { Link } from 'react-router-dom';
import { StaticRouter, MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it('renders battle friends title', () => {
    const welcome = <h1>Battle Your Friends and...Stuff</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('renders a Battle link', () => {
    const battle = <Link className='button' to='/battle'>Battle</Link>
    expect(wrapper.contains(battle)).toEqual(true);
  });
});
