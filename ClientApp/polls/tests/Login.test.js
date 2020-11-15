import React from 'react';
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../src/components/Login/Login';


Enzyme.configure({adapter: new Adapter()});

describe('Login',() => {
    it('should contain two input fields'), () =>{
        const wrapper = shallow(<Login />);
        const input = wrapper.find('input');
        expect(input.length()).toBe(2)
    }
})