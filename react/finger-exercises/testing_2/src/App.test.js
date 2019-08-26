import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Dashboard from './screens/Dashboard';

configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toHaveLength(1);
  });

  it('matches the snapshot', () => {
    const wrapper= shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
