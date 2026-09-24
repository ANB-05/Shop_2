import React, { useState } from "react";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


function Login() {

    const {handleLogin} = useShoppingCartContext()

    const [user,setUser] = useState({
        username : "",
        password : "" ,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target

        setUser({
            ...user,
            [name] : value
        })
    }

    return (  
        <>
            <Container>
                <div className="bg-gray-600 text-white h-full p-12 rounded mt-10 flex flex-col  ">
                    <input type="text" placeholder="username" className="my-5 p-3 border border-red-600 " onChange={handleChange} value={user.username}/><br />
                    <input type="password" placeholder="password" className="my-5 p-3 border border-red-600 " onChange={handleChange} value={user.password}/>
                    <Button onClick={()=>handleLogin(user.username,user.password)} variant="success">login</Button>
                </div>
            </Container>
        </>
    );
}

export default Login;