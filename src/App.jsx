




import './App.css'
import DaisyNavbar from './daisyNavbar'
import Navbar from './Navbar'
import { Menu } from 'lucide-react';
function App() {
 

  return (
    <>
   
  
 <div className='flex justify-between mt-2 items-center m-5 md:m-12'>
 <p className='md:grid hidden '>Syed Takmil</p>
  <Navbar ></Navbar>
<Sign></Sign>
</div>
    </>
  )
}
function Sign(){
  return(
    <>
    <button className='btn-secondary btn'>Sign In</button>
    </>
  )
}

export default App
