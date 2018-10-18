import React from 'react';
import { shallow } from 'enzyme';
import ReincarnatedUser from './';
import { mockUser } from '../../utilities/mockData'

describe('ReincarnatedUser', () => {
  let wrapper;

  beforeEach(() => {
    const user = mockUser;
    wrapper = shallow(<ReincarnatedUser user={user} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});