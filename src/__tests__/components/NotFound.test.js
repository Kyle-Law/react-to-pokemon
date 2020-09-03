import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '../../components/NotFound';

describe('<NotFound/> component unit tests', () => {
  it('should render 1 <NotFound /> component', () => {
    const component = shallow(<NotFound />);
    expect(component).toHaveLength(1);
  });
});
