import Header from './Header';
import {shallow} from 'enzyme';

describe('HEADER', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
  });
});
