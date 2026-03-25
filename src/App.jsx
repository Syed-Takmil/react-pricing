




import './App.css'
import DaisyNavbar from './daisyNavbar'
import Navbar from './Navbar'
import { Menu } from 'lucide-react';
import PricingOptions from './PricingOptions';
function App() {
 

  return (
    <>
   
  
 <header className='flex justify-between items-center mx-3 md:mx-12 p-3'>
 <p className='md:grid hidden '>Syed Takmil</p>
  <Navbar ></Navbar>
<Sign></Sign>
</header>

 <main className='m-5 p-2'>
  <h1 className='flex justify-center items-center text-3xl mb-3'>Get Our Membership</h1>
  <PricingOptions></PricingOptions>
 </main>
 <section></section>
    </>
  )
}

function Sign(){
  return(
    <>
    <button className='btn-primary btn'>Sign In</button>
    </>
  )
}

export default App
