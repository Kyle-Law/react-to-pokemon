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

  it('should have 4(All, 1,2,3)+1(disabled) options for seasons', () => {
    const component = shallow(<Filter {...props} />);
    expect(component.find('option')).toHaveLength(5);
  });

  it('should have 1 <label > component', () => {
    const component = shallow(<Filter {...props} />);
    expect(component.find('label')).toHaveLength(1);
  });

  it("should have 1 <select> node and season's value is passed", () => {
    const component = shallow(<Filter {...props} />);
    expect(component.find('select')).toHaveLength(1);
    expect(component.find('select').props().value).toEqual('All');
  });
});
