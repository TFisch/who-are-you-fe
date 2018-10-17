import React from 'react';
import { shallow } from 'enzyme';
import DateSubmitForm from './'

describe('DateSubmitForm', () => {
  let wrapper;

  beforeEach(() => {
    const mockHideForm = jest.fn()
    let mockProps = {
      headerText: "WHO ARE YOU?",
      inputOneText: "What is your name?",
      inputTwoText: "What is your birthday?",
      hideForm: mockHideForm
    }

    wrapper = shallow(<DateSubmitForm props={mockProps}
    />);
  })

  it('should be a test', () => {

  });
});