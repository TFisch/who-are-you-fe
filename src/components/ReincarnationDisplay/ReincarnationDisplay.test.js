import React from 'react';
import { shallow, mount } from 'enzyme';
import ReincarnationDisplay from '.'
import sinon from 'sinon';

describe('ReincarnationDisplay', () => {
  let wrapper;

  beforeEach(() => {
    const Submit = jest.mock('../common/Submit', () => 'Submit');
    const handleSubmit = sinon.spy();
    wrapper = shallow(<ReincarnationDisplay Submit={Submit} handleSubmit={handleSubmit} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onSubmit when clicked', () => {
    const event = {}
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.find('Submit').simulate('click', event);
    wrapper.update();
    expect(spy).toHaveBeCalled();
  })


});