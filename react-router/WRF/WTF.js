import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// components
import Home from './home/Home'
import Header from './header/Header'
// import Search from './search/Search'
//import ProductPage from './productPage/ProductPage'

class Navigation extends Component{
    render(){
        return(
        <BrowserRouter>
            <Header />
                <Suspense fallback={<div>Loading....</div>}>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={lazy(()=>import('./search/Search'))} />
                    <Route path="/:product/:productid" component={lazy(()=>import('./productPage/ProductPage'))} />
                </Suspense>
            
        </BrowserRouter>
        )
    }
}
export default Navigation
