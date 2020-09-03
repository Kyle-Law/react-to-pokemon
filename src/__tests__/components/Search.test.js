/* eslint-disable react/jsx-props-no-spreading */
import { shallow } from 'enzyme';
import React from 'react';
import Search from '../../components/Search';

describe('<Search/> component unit tests', () => {
  const mockFn = jest.fn();
  const props = {
    onChange: mockFn,
    search: 'test',
  };
  it('should render 1 <Search /> component', () => {
    const component = shallow(<Search {...props} />);
    expect(component).toHaveLength(1);
  });

  it('should have 1 <input > component', () => {
    const component = shallow(<Search {...props} />);
    expect(component.find('input')).toHaveLength(1);
  });

  it('the value is passed as value of <Search/>', () => {
    const component = shallow(<Search {...props} />);
    expect(component.props().value).toEqual('test');
  });
});
