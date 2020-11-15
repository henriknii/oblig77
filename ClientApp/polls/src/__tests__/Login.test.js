import React from 'react';
import Enzyme,{shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../components/Login/Login';
import LoginForm,{Input} from '../components/Login/LoginForm';


Enzyme.configure({adapter: new Adapter()});

describe('Login',() => {
    it('should contain a header with the text Registrer deg', () =>{
        const wrapper = shallow(<Login />);
        const text = wrapper.find('div h4')
        expect(text.text()).toBe('Registrer deg')
      
    })
})

describe('Login',() =>{
    it('should contain a Loginform',() =>{
        const wrapper = shallow(<Login/>);
        expect(wrapper.find(LoginForm)).toHaveLength(1)
    })
})


describe('Loginform', () => {
    it('should contain two inputs',() => {
        const wrapper = shallow(<LoginForm/>)
        expect(wrapper.find(Input)).toHaveLength(2);
    })
})