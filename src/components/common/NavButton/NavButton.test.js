import React from 'react';
import { shallow } from 'enzyme';
import NavButton from './'

describe('NavButton', () => {
  let wrapper;

  beforeEach(() => {
    let mockProps = {
      buttonText: "mock"
    }

    wrapper = shallow(<NavButton props={mockProps}
    />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});