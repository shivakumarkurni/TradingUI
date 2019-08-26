import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Login, {mapStateToProps,mapDispatchToProps} from './login';
import * as userAction from '../../action/action';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Login Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login store={store} />);
    });
    
    it('should render', () => {
        expect(wrapper.dive()).toHaveLength(1);
    });

      it('should have empty formData', () => {
        expect(wrapper.dive().state().formData.userName).toBe('');
    });

    
  describe('When submit button is clicked', () => {
    beforeEach(() => {
        wrapper.dive().find('.mobileNo').simulate('change', { target: { value: '9618339354' } });
        wrapper.dive().find('.password').simulate('change', { target: { value: 'lakshmi123' } });

      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      const submit = wrapper.dive().find('button');
      submit.simulate('click', fakeEvent);
    });

    it('should have excepted MobileNo', () => {
      expect(wrapper.dive().state().formData.mobileNo).toEqual('9618339354');
    });

    it('should have excepted Password', () => {
      expect(wrapper.dive().state().formData.password).toEqual('lakshmi123');
    });
  });
});