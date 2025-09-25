
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import "./assets/vector1.png"

import BannerCard from './components/BannerCard'
import SectionCard from './components/SectionCard'
import { Suspense } from 'react'

const fetchSection = async() =>{
  const res = await fetch("/customer.json")
  return  res.json()
}

function App() {
  
const cartPromise = fetchSection()
  return (
    <>

    <Navbar></Navbar>
  
<BannerCard></BannerCard>

<Suspense>
  <SectionCard cartPromise={cartPromise}></SectionCard>
</Suspense>

    <Footer></Footer>
    </>
  )
}

export default App
