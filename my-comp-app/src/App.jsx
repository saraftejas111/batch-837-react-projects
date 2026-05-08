import './App.css'
import Electronics from './components/Electronics'
import Fashion from './components/Fashion'
import Mobiles from './components/Mobiles'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <center>

        <h1>Welcome to my Component App..</h1>

        <Navbar/>

        <Mobiles/>

        <Fashion/>
        <Electronics/>

      </center>
    </>
  )
}

export default App
