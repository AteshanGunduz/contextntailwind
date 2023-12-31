import { useContext, useState } from "react"
import Payment from "./Payment"
import UserContext from "./UseContext"




const App = () => {
  const {toggle, handleClick} = useContext(UserContext)


  return (
    <div className="flex justify-center flex-col items-center mt-10">
    <h2 className="m-10">Payment</h2>
    <h4>Total Price: $234</h4>
    <button onClick={handleClick} className="m-10 bg-blue-400 p-3 rounded-lg">Confirm Payment</button>
    {toggle && (
        <div className="flex flex-col justify-center items-center">
        <Payment />
        </div>
    )}
   </div>
  )
}
export default App