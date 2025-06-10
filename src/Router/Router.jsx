import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../components/Main/Home'
import Career from '../components/Page/Career'
import Cakes from '../components/Page/cakes'
import AboutUs from '../components/Page/AboutUs'
import Fermezza from '../components/Page/Fermezza'
import Store from '../components/Page/Store'
import Distribution from '../components/Page/Distribution'
import Kurabiye from '../components/Page/Nationalcuisine'
import Tea from '../components/Page/Tea'
import Chocolate from '../components/Page/Chocolate'



function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                <Route path='/' element={<Home/>} />
               <Route path='/career' element ={<Career/>}/>
               <Route path='/cakes' element ={<Cakes/>}/>
               <Route path='/about' element ={<AboutUs/>}/>
               <Route path='/FERMAZZA' element ={<Fermezza/>}/>
               <Route path='/ourstores' element ={<Store/>}/>
               <Route path='/distribution' element ={<Distribution/>}/>
               <Route path='/nationalcuisine' element ={<Kurabiye/>}/>
               <Route path='/tea' element ={<Tea/>}/>
               <Route path='/chocolate' element ={<Chocolate/>}/>
        
                </Route>
            </Routes>

        </>
    )
}

export default Router