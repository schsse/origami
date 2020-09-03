import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import styles from './index.module.css'
import HomePage from '../pages/homePage/HomePage'
import ShareThoughtsPage from '../pages/share-thoughts/ShareThoughts'
import RegisterPage from '../pages/registerPage/RegisterPage'
import LoginPage from '../pages/loginPage/LoginPage'

const Navigation = () =>{
    return(
       <BrowserRouter>
           <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/share" component={ShareThoughtsPage} />
               <Route path="/register" component={RegisterPage} />
               <Route path="/login" component={LoginPage} />
           </Switch>
       </BrowserRouter>
    )
}
export default Navigation