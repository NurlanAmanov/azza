import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../components/Main/Home'
import Career from '../components/Page/Career'
import AboutUs from '../components/Page/AboutUs'
import Fermezza from '../components/Page/Fermezza'
import Store from '../components/Page/Store'
import Distribution from '../components/Page/Distribution'
import Tea from '../components/Page/Tea'
import Chocolate from '../components/Page/Chocolate'
import Nationalcuisine from '../components/Page/Nationalcuisine'






function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                <Route path='/' element={<Home/>} />
               <Route path='/career' element ={<Career/>}/>
       
               <Route path='/about' element ={<AboutUs/>}/>
               <Route path='/FERMAZZA' element ={<Fermezza/>}/>
               <Route path='/ourstores' element ={<Store/>}/>
               <Route path='/distribution' element ={<Distribution/>}/>
               <Route path='/nationalcuisine' element ={<Nationalcuisine/>}/>
               <Route path='/tea' element ={<Tea/>}/>
               <Route path='/chocolate' element ={<Chocolate/>}/>
        
                </Route>
            </Routes>

        </>
    )
}

export default Router