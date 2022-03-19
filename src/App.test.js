import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders non-empty component without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('display navbar', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'navbar-display');
  expect(appComponent.length).toBe(1);
});

test('display users', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'users-display');
  expect(appComponent.length).toBe(1);
});

test('clicking on users display their posts', () => {});
