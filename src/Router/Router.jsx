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
import Tortlar from '../components/Page/Tortlar'
import Rulet from '../components/Page/Rulet'
import Torts from '../components/Page/Tort-desert'
import Corek from '../components/Page/Corek'
import Cook from '../components/Page/Cook'
import Milli from '../components/Page/Milli'
import Piroq from '../components/Page/Piroq'
import Ekler from '../components/Page/Ekler'





function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                <Route path='/' element={<Home/>} />
               <Route path='/career' element ={<Career/>}/>
               <Route path='/cakes' element ={<Tortlar/>}/>
               <Route path='/about' element ={<AboutUs/>}/>
               <Route path='/FERMAZZA' element ={<Fermezza/>}/>
               <Route path='/ourstores' element ={<Store/>}/>
               <Route path='/distribution' element ={<Distribution/>}/>
               <Route path='/nationalcuisine' element ={<Nationalcuisine/>}/>
               <Route path='/tea' element ={<Tea/>}/>
               <Route path='/chocolate' element ={<Chocolate/>}/>
               <Route path='/rulet' element ={<Rulet/>}/>
               <Route path='/tortlar' element ={<Torts/>}/>
               <Route path='/corek' element ={<Corek/>}/>
               <Route path='/cook' element ={<Cook/>}/>
               <Route path='/milli' element ={<Milli/>}/>
               <Route path='/Piroq' element ={<Piroq/>}/>
               <Route path='/ekler' element ={<Ekler/>}/>
        
                </Route>
            </Routes>

        </>
    )
}

export default Router