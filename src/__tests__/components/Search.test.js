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
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<Search {...props} />);
    expect(component).toHaveLength(1);
  });
});
