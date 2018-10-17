import React from 'react';
import { shallow } from 'enzyme';
import Submit from './'

describe('Submit', () => {
  let wrapper;

  beforeEach(() => {
    let mockProps = {
      buttonText: "mock"
    }

    wrapper = shallow(<Submit props={mockProps}
    />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});