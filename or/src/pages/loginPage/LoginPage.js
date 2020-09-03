import React from 'react'
import PageLayout from '../../components/page-layout/PageLayout'
import Title from '../../components/title/Title'
import SubmitButton from '../../components/button/SubmitButton'
import Input from '../../components/input/Input'

const LoginPage=()=>{
    return(
           <PageLayout>
             <Title title="Login Page" />
               <Input label="Email" id="email" />
               <Input label="Register" id="register" />
             <SubmitButton title="Login" />
           </PageLayout>
    )
}
export default LoginPage