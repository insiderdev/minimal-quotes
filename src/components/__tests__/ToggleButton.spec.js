/* eslint-disable no-undef */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ToggleButton } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing ToggleButton component', () => {
  it('renders as expected', () => {
    const wrapper = Enzyme.shallow(
      <ToggleButton>
        Hello
      </ToggleButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
