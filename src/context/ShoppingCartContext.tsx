import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IshoppingCartProvider {
    children : React.ReactNode
}

interface IcartItem {
    id : number,
    qty : number
}

interface IshoppingCartContext {
    cartItem : IcartItem[]
    handleIncreaseProductQty : (id: number)=>void
    handleDecreaseProductQty : (id: number)=>void 
    getProductQty : (id: number)=> number
    handelDeleteItem : (id: number)=> void
    handleLogin : (username:string,password:string)=> void,
    handleLogout : ()=> void,
    cartQty : number
    isLogin : boolean
}

export const ShoppingCartContext = createContext({} as IshoppingCartContext)

export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: IshoppingCartProvider){

    const [cartItem,setCartItem] = useLocalStorage<IcartItem[]>("cartItems",[])

    const handleIncreaseProductQty = (id : number)=>{
        setCartItem((currentItem) => {
            let selectedItem = currentItem.find(item=>item.id == id)

            if(selectedItem == null){
                return [...currentItem, {id: id , qty:1}]
            } else {
                return currentItem.map(item=>{
                    if(item.id == id){
                        return {...item,qty:item.qty+1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const handleDecreaseProductQty = (id: number)=>{
        setCartItem(currentItem=>{
            let selectedItem = currentItem.find(item=>item.id == id)

            if(selectedItem?.qty == 1){
                return currentItem.filter(item => item.id !== id)
            } else {
                return currentItem.map(item=>{
                    if(item.id == id){
                        return {...item , qty : item.qty - 1}
                    } else {
                        return item
                    }
                })
            }
        })

    }

    const getProductQty = (id: number)=>{
        return cartItem.find(item=>item.id == id)?.qty || 0
    }

    const handelDeleteItem = (id: number) => {
        setCartItem(currentItem => currentItem.filter(item => item.id != id))
    }

    const cartQty = cartItem.reduce((total,item)=> total + item.qty , 0)

    const [isLogin,setIsLogin] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (username:string,password:string) => {
        
        login(username,password).finally(()=>{
            let token = 'ksdmncvkdsncvkpdsncvpdsndjvchdsohvodsuihu'
            localStorage.setItem("token",token)
            setIsLogin(true)
            navigate('/')
        })
    }

    const handleLogout = () => {
        setIsLogin(false)
        navigate('/login')
        localStorage.removeItem('token')
    }

    useEffect(()=>{
        let token = localStorage.getItem('token')

        if(token){
            setIsLogin(true)
        }
    },[])

    return(
        <ShoppingCartContext.Provider value={{
            cartItem , 
            handleIncreaseProductQty , 
            handleDecreaseProductQty , 
            getProductQty ,
            handelDeleteItem ,
            handleLogin,
            cartQty ,
            isLogin ,
            handleLogout
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}