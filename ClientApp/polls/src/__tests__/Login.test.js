import React from 'react';
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../components/Login/Login';


Enzyme.configure({adapter: new Adapter()});

describe('Login',() => {
    it('should contain a div', () =>{
        const wrapper = shallow(<Login />);
        const text = wrapper.find('div h4')
        expect(text.text()).toBe('Registrer deg')
      
    })
})