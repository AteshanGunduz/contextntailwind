import { useState, createContext } from "react"

const UserContext = createContext()

const Provider = ({children}) => {
    const [toggle, setToggle] = useState(false)
    const [cardBack, setCardBack] =useState(false)

    const handleClick = ()=>{
        setToggle(!toggle)
    }

    const handleClickCvc = ()=>{
        setCardBack(true)
    }

    const handleClickFront = ()=>{
        setCardBack(false)
    }

    const handleSubmit = ()=>{
      setToggle(false)
    }


    //Add-up here
    const valueToShare = {
        toggle,
        handleClick,
        cardBack,
        handleClickCvc,
        handleClickFront,
        handleSubmit,
    }
    console.log(valueToShare)


  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  )
}
export default UserContext
export {Provider}