import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it.skip('should match the snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot();
});
