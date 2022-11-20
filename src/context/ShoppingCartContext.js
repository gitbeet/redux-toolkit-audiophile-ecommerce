import React ,  {createContext, useContext, useEffect, useState} from "react";

const shoppingCartContext = createContext()

export function useShoppingCart(){
    const context = useContext(shoppingCartContext)
    if(!context) throw new Error('No shopping cart context found!')
    return context
}

export default function ShoppingCartProvider({children}){

    const [shoppingCartProducts,setShoppingCartProducts] = useState([])

    useEffect(() => {
      const localstorageItem  = localStorage.getItem('shoppingCartProducts')
      if(localstorageItem !== null) setShoppingCartProducts(JSON.parse(localstorageItem))
    },[])

    useEffect(() => {
        localStorage.setItem('shoppingCartProducts',JSON.stringify(shoppingCartProducts))
    },[shoppingCartProducts])

    function addToCart(productId,quantity){
        if(quantity === 0) return
        setShoppingCartProducts(prev => {
            return prev.length === 0 ? [...prev , {name: productId , quantity : quantity}] :          
                   prev.findIndex(product => product.name === productId) === -1 ? [...prev , {name: productId , quantity : quantity}]
                                                                                : prev.map( product => {
                                                                                    return product.name === productId ? {...product,quantity:product.quantity+quantity}
                                                                                                                      : {...product}
                                                                                })
                                            
        })
    }

    function changeQuantity(productId , operator){
        setShoppingCartProducts(prev => prev.map( product => {
            return product.name === productId ? {...product , quantity : operator === 'plus' ? product.quantity + 1 
                                                                              : product.quantity < 1 ? 0 : product.quantity - 1}
                                              : product
        }))
    }



    function removeAll(){
        setShoppingCartProducts([])
    }


    return(
        <shoppingCartContext.Provider value={{shoppingCartProducts,
                                              addToCart,
                                              changeQuantity,
                                              removeAll}}>
            {children}
        </shoppingCartContext.Provider>
    )
}