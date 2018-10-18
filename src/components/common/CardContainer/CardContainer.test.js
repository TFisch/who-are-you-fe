import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './';
import { mockUsers } from '../../../utilities/mockData'

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    const users = mockUsers
    wrapper = shallow(<CardContainer users={users} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});