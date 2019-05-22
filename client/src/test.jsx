import React from 'react';
import { configure, shallow } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';

import App from './components/App.jsx';

configure({ adapter: new Adapter() });


describe('First React component test with Enzyme', () => {
  test('Creates a snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
