
import './App.css'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import "./assets/vector1.png"


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
  



<Suspense>
  <SectionCard  cartPromise={cartPromise}></SectionCard>
</Suspense>

    <Footer></Footer>
    <ToastContainer />
    </>
  )
}

export default App
