import { useState, useContext } from "react"
import UserContext from "./UseContext"


const Payment = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [name, setName] = useState("")
  const [valid, setValid] = useState("")
  const [cvc, setCvc] = useState("")

  const [accountName, setAccountName] = useState("")
  const [email, setEmail] = useState("")

  const {cardBack, handleClickCvc, handleClickFront, handleSubmit} = useContext(UserContext)

  const formatCardNumber = (input) => {
    const formattedInput = input.replace(/\D/g, ''); // Remove non-numeric characters
    const parts = formattedInput.match(/[\s\S]{1,4}/g) || []; // Split into groups of four digits
    return parts.join(' '); // Join the groups with a space
  };

  const formatCvc = (input) => {
    const formattedInput = input.replace(/\D/g, '');
    return formattedInput
  };

  const formatValidThru = (input) => {
    const formattedInput = input.replace(/\D/g, ''); 
    const month = formattedInput.substring(0, 2);
    const year = formattedInput.substring(2, 4);
    return `${month}/${year}`;
  };

  const handleReset = ()=>{
    setName("")
    setValid("")
    setCardNumber("")
    setCvc("")
    setAccountName("")
    setEmail("")
  }

 

  return (
    <div className="payment-container rounded-xl flex flex-col justify-center items-center">
      <h2 className="mb-4">Add your payment adress</h2>
      {!cardBack ? (
         <div className="card rounded-xl flex flex-col justify-center items-center ">
         <div id="card-img"className="flex flex justify-between items-center">
           <img src="/chip.png" alt="" width="50px"/>
           <img src="/ma_symbol.svg" alt="" width="90px" />
         </div>
         <div>
           <h2 className="text-xl font-bold">{formatCardNumber(cardNumber)} </h2>
         </div>
         <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{name}</h2>
            <h3 className="font-semibold">{formatValidThru(valid)}</h3>
         </div>
       </div>

      ) : (
        <div className="card-back rounded-xl flex flex-col justify-center items-center ">
        <div className="card-black">
        </div>
        <div className="card-cvc">
          <h2 className="text-md font-bold mr-6 mt-2">{formatCvc(cvc)}</h2>
        </div>
        <div className="flex justify-between items-center">
        <img src="/ma_symbol.svg" alt="" width="90px" />
        </div>
      </div>
      )}
   
      <div className="flex justify-evenly">
        <input type="text" value={accountName}  placeholder=" Card Name" onChange={(e)=>{setAccountName(e.target.value)}} />
        <input type="email" value={email} placeholder=" Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="flex flex-col justify-evenly">
        <input className="mb-2" maxLength="16" type="text" value={cardNumber} placeholder=" Card Number" onFocus={handleClickFront} onChange={(e)=>{setCardNumber(e.target.value)}} />
        <input type="text" placeholder=" Name" value={name} onFocus={handleClickFront} onChange={(e) => { const updatedValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        setName(updatedValue);
        }}/>
      </div>
      <div className="flex justify-evenly">
        <input type="text" maxLength="5" value={valid} placeholder=" Valid Thru" onFocus={handleClickFront} onChange={(e)=>{setValid(e.target.value)}}/>
        <input type="text" maxLength="3" value={cvc} placeholder=" CVC" onFocus={handleClickCvc} onChange={(e)=>{setCvc(e.target.value)}}/>
      </div>
      <div className="flex justify-center">
        <button className=" bg-blue-400 m-1 p-2 rounded-xl" onClick={handleSubmit} >Submit</button>
        <button className=" bg-blue-400 m-1 p-2 rounded-xl" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
export default Payment