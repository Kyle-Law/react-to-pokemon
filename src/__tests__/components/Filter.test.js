/* eslint-disable react/jsx-props-no-spreading */
import { shallow } from 'enzyme';
import React from 'react';
import Filter from '../../components/Filter';

describe('<Filter/> component unit tests', () => {
  const mockFn = jest.fn();
  const props = {
    onFilter: mockFn,
    season: 'All',
  };
  it('should render 1 <Filter /> component', () => {
    const component = shallow(<Filter {...props} />);
    expect(component).toHaveLength(1);
  });
});
