import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import styles from './index.module.css'
import HomePage from '../pages/homePage/HomePage'
import ShareThoughtsPage from '../pages/share-thoughts/ShareThoughts'

const Navigation = () =>{
    return(
       <BrowserRouter>
           <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/share" component={ShareThoughtsPage} />
           </Switch>
       </BrowserRouter>
    )
}
export default Navigation