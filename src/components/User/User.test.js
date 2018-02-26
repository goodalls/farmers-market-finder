import React from 'react';
import {shallow} from 'enzyme';
import {User, mapStateToProps, mapDispatchToProps} from './User';


describe('USER', () => {
  let wrapper;
  beforeAll(()=> {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn()
    };
    global.localStorage = localStorageMock;
  });

  beforeEach(()=>{
    wrapper = shallow(<User history={({})} logOutUser={jest.fn()} loginUser={jest.fn()} updateUser={jest.fn()} user={({})} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('userUpdater', () => {
    it('should set state of user from localstorage', () => {
      const localStorageMock = {
        getItem: jest.fn().mockReturnValue({name: 'tom'}),
        setItem: jest.fn(),
        clear: jest.fn()
      };
      const expected = {
        "email": "", 
        "favorites":[], 
        "name": "", 
        "password": "", 
        "status": ""
      };
      global.localStorage = localStorageMock;
      wrapper.instance().userUpdater();
      wrapper.update();
      expect(wrapper.state()).toEqual(expected);
    });

    it.skip('should call localStorage.getItem', () => {
      const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn()
      };
      global.localStorage = localStorageMock;
      wrapper.instance().userUpdater();
      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });
  
  describe('handleInputs', () => {
    it('should set state from the name input', () => {
      const mockEvent = {target: {name: 'name', value: 'the man'}};
      wrapper.instance().handleInputs(mockEvent);
      expect(wrapper.state('name')).toEqual('the man');
    });

    it('should set state from the password input', () => {
      const mockEvent = {target: {name: 'password', value: 'password'}};
      wrapper.instance().handleInputs(mockEvent);
      expect(wrapper.state('password')).toEqual('password');
    });

    it('should set state from the email input', () => {
      const mockEvent = {target: {name: 'email', value: 'me@me.com'}};
      wrapper.instance().handleInputs(mockEvent);
      expect(wrapper.state('email')).toEqual('me@me.com');
    });
  });

  describe('saveUser', () => {
    it('should call localStorage setItem', () => {
      wrapper.instance().saveUser();
      expect(localStorage.setItem()).toHaveBeenCalled();
    });
  });
  
  

  describe('MSTP and MDTP', () => {
    it('should map user info to props', () => {
      const mockState = {
        user: {}
      };
      const expected = {};
      const mapped = mapStateToProps(mockState);
      expect(mapped.user).toEqual(expected);
    });

    it('should call dispatch on loginUser', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.loginUser();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch on loginUser', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.logOutUser();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch on loginUser', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.updateUser();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
  

});
