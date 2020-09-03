import React, {Component} from 'react'
import Input from '../../components/input/Input'
import PageLayout from '../../components/page-layout/PageLayout'
import Title from '../../components/title/Title'
import SubmitButton from '../../components/button/SubmitButton'

class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            repassword: ""
        }
    }

    onChange=(event,type)=>{
       const newState={}
       newState[type] = event.target.value
       this.setState(newState)
       console.log('onChange working: ' + type)
    }

    render(){
        const {email,password,repassword} = this.state
        return(
            <PageLayout>
            <Title title="Register" />
                <Input label="Email" id="email" value={email} onChange={(event)=>this.onChange(event,'email')} />
                <Input label="Password" id="password" value={password} onChange={(event)=>this.onChange(event,'password')} />
                <Input label="Re-password" id="repassword" value={repassword} onChange={(event)=>this.onChange(event,'repassword')} />
            <SubmitButton title="Login" />
            </PageLayout>
       )
    }
}
export default RegisterPage