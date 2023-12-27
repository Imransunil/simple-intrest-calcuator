import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { TextField,Button,Stack } from '@mui/material'

function App() {
  const [Interest, setInterest] = useState(0)
  const [Principle, setPrinciple] = useState(0)
  const [Rate,setRate] = useState(0)
  const [Year, setYear] = useState(0)
  const[validPrinciple,setValidPrinciple]=useState(true)
  const[validRate,setValidRate]=useState(true)
  const[validYear,setValidYear]=useState(true)
  const validateUserInput=(e)=>{
    const {name,value} = e.target
    // console.log(`${name},${typeof value}`);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(value.match(/^\d*\.?\d+$/)){
      //valid pattern
      if(name==='principle'){
       setPrinciple(value)
       setValidPrinciple(true)
      }else if(name==='rate'){
      setRate(value)
      setValidRate(true)
      } else{
        setYear(value)
        setValidYear(true)
      }
    }
    else{
      //invalid pattern
      if(name==='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
       }else if(name==='rate'){
       setRate(value)
       setValidRate(false)
       } else{
         setYear(value)
         setValidYear(false)
       }
    }
  }
 const handleReset=()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setValidPrinciple(true)
  setValidRate(true)
  setValidYear(0)
 }
 const handleCalculate=(e)=>{
  e.preventDefault()
  if(!Principle || !Rate || !Year){
   alert("please fill the form completely")
  }
  else{
    setInterest(Principle*Rate*Year/100)

  }
 }
  return (
    <div style={{width:'100%',height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
      <div style={{width:'600px'}} className='p-5 rounded bg-light'>
        <h3 style={{height:'35px'}}>
          Simple Interest Calculator
        </h3>
        <p>Calculate your simple InterestEasily</p>
        <div style={{width:'100%',height:'150px'}} className='d-flex justify-content-center align-items-center bg-warning  flex-column text-light'>
          <h1 style={ {height:'55px'}}>₹ {Interest}</h1>
          <p className="fw-bolder">Total Simple Interest</p>

        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className="mb-3 mt-3">
          <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" name='principle' onChange={e=>validateUserInput(e)} value={Principle || ""} /></div>
          { !validPrinciple&&<div className="text-danger mb-3 fw-bolder">
            Invalid user input
          </div> }
          <div  className="mb-3 mt-3"><TextField className='w-100' name='rate'  id="outlined-basic-rate" label="Rate of Interest (%)" variant="outlined" value={Rate || ""} onChange={e=>validateUserInput(e)}/></div>
          { !validRate&&<div className="text-danger mb-3 fw-bolder">
            Invalid user input
          </div> }
          <div><TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr)" name='year'  variant="outlined" value={Year || ""} onChange={e=>validateUserInput(e)}/></div>
          { !validYear&&<div className="text-danger mb-3 fw-bolder">
            Invalid user input
          </div> }
         <Stack className='mt-3' direction="row" spacing={2}>
            <Button  className='bg-dark text-light' style={{height:'70px',width:'50%'}} type='submit' variant="contained" disabled={validPrinciple&&validRate&&validYear?false:true}>CALCULATE</Button>
            <Button onClick={handleReset} className='text-dark'   style={{height:'70px',width:'50%'}} variant="outlined">RESET</Button>
         </Stack>
            
        </form>
      </div>
</div>
  )
}

export default App
