import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../components/Main/Home'


function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                <Route path='/' element={<Home/>} />
               
        
                </Route>
            </Routes>

        </>
    )
}

export default Router