import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';
import { Link } from 'react-router-dom';
import { StaticRouter, MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer';

describe('<Home />', () => { 
  it('renders battle friends title', () => {
    const wrapper = shallow(<Home />);
    const welcome = <h1>Battle Your Friends and...Stuff</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('renders a Battle link', () => {
    const wrapper = shallow(<Home />);
    const battle = <Link className='button' to='/battle'>Battle</Link>
    expect(wrapper.contains(battle)).toEqual(true);
  });
});

// test('cursor should change when hovering over Battle link', () => {
//   render(
//     <MemoryRouter>
//       <Home />
//     </MemoryRouter>
//   )
//   hover(theLink)
//   expect(cursorChange)
// });

// test('Battle button text should change color when cursor hovers', () => {
//   const component = renderer.create(
//     <StaticRouter location='battle' context={Link}>
//       <Link to='/battle' />
//     </StaticRouter>
//   )
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
