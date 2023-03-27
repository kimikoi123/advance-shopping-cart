import { useState, createContext, useContext, ReactNode } from "react"
import CartContainer from "../components/CartContainer"
import items from "../constants/items.json"

interface StoreContextProviderProps {
  children: ReactNode
}

interface CartItemProps {
  id: number
  quantity: number
}

interface StoreContextProps {
  handleAddQuantity: (id: number) => void
  handleMinusQuantity: (id: number) => void
  getQuantityId: (id: number) => number
  handleRemove: (id: number) => void,
  handleClose: () => void
  handleShow: () => void
  totalCartQuantity: number
  show: boolean
  cartItems: CartItemProps[]
  totalPrice: number
}





const StoreContext = createContext({} as StoreContextProps)

export function useStoreContext() {
  return useContext(StoreContext)
}

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])
  const [show,  setShow] = useState(false)
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce((total, item) => {
    const i = items.find(x => item.id === x.id)
    return total + (i!.price * item.quantity)
  }, 0)

  function handleAddQuantity(id: number) {
    setCartItems(prevValue => {
      const item = cartItems.find(item => item.id === id)
      if (item == null) {
        return [...prevValue, { id, quantity: 1}]
      } else {
        return cartItems.map(v => {
          if (v.id === id) {
            return {...v, quantity: v.quantity + 1}
          } else {
            return v
          }
        })
      }
    })

  }

  function handleMinusQuantity(id: number) {
    setCartItems(prevValue => {
      const item = cartItems.find(item => item.id === id)
      if (item == null) {
        return prevValue
      } else {
        return cartItems.map(v => {
          if (v.id === id) {
            return {...v, quantity: v.quantity - 1}
          } else {
            return v
          }
        })
      }
    })

  }

  function getQuantityId(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function handleRemove(id: number) {
    setCartItems(prevValue => {
      return prevValue.filter(item => item.id !== id)
    })
  }

  function handleShow() {
    setShow(true)
  }

  function handleClose() {
    setShow(false)
  }



  const value = {
    handleAddQuantity,
    handleMinusQuantity,
    getQuantityId,
    handleRemove,
    totalCartQuantity,
    handleClose,
    handleShow,
    show,
    cartItems,
    totalPrice
  }

  return (
  <StoreContext.Provider value={value}>
    {children}
    <CartContainer />
  </StoreContext.Provider>)
}
