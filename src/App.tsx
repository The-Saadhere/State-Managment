import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countInput, setCountInput] = useState(0)

const handleInput = ()=>{
 setCount(Math.max(countInput, 0))
 setCountInput(0)
}
  return (
    <>
    <div className='min-h-[100vh] gap-2 flex flex-col items-center justify-center'>
<div className="flex gap-4">

     <Button variant='default' onClick={()=>setCount(count + 1)}>Increase</Button>
     <Button disabled={count <= 0} onClick={()=>setCount(count - 1)}>Decrease</Button>
</div>
<div className='flex gap-4'>
 <Badge variant="secondary" className="text-lg px-6 py-4">
 Count is {count}
</Badge>
     <Button onClick={()=>setCount(0)}>Reset</Button>
   
</div>
     <Input className='w-40' type="number" value={countInput} onChange={(e)=> setCountInput(Number(e.target.value))} />
     <Button onClick={()=>handleInput()}>Set Count to {countInput}</Button>
    </div>
    </>
  )
}

export default App
