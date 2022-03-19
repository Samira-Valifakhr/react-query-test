import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Users } from './Users';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('display users', () => {
  const wrapper = shallow(<Users />);
  const usersDisplay = wrapper.find("[data-test='users-display']");
  expect(usersDisplay.length).toBe(1);
});

test('search users', () => {
  const wrapper = shallow(<Users />);
  const usersSearch = wrapper.find("[data-test='users-display']");
  expect(usersSearch.length).toBe(1);
});
