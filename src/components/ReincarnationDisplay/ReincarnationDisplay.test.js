import React from 'react';
import { shallow } from 'enzyme';
import ReincarnationDisplay from './'

describe('ReincarnationDisplay', () => {
  let wrapper;

  beforeEach(() => {
    let mockProps = {
      buttonText: "mock"
    }

    wrapper = shallow(<ReincarnationDisplay props={mockProps}
    />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});