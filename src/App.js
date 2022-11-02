import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {AddBox,selectCount, increment, decrement, deleteBox} from "./Component/Slices/TodoSlices"

const App = () => {
  const dispatch=useDispatch();
  const CoinBox=useSelector(selectCount)
  return (
<>
<button onClick={()=>dispatch(AddBox())}>AddBox</button>
{
  CoinBox?.map((item, index) => {
    return (
      <div key={item.id}>
        <span>{index+1}=</span>
        <button onClick={() => {
          dispatch(decrement(item.id))
        }}>Dec</button>
        <span>{item.Coin}</span>
        <button onClick={() => {
          dispatch(increment(item.id))
        }}>Inc</button>
        <button onClick={() => {
          dispatch(deleteBox(item.id))
        }}>Delete</button>
      </div>
    )
  })
}


</>  )
}

export default App