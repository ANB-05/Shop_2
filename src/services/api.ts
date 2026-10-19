import axios from "axios";


const client = axios.create({
    baseURL : 'https://fakestoreapi.com'
})


export async function getProducts() {
    const { data } = await client('/products')

    return data
}


export async function getProduct(id : string | number){
    const { data } = await client(`/products/${id}`)

    return data  
}

export async function login(username: string , password: string) {
    const {data} = await client({
        method : "POST",
        url : '/login',
        data : {
            username,
            password
        },
    })

    return data
}






export async function getBlogs() {
    const { data } = await axios.get("https://dummyjson.com/products");

    return data.products;
}

export async function getBlog(id : string | number){
    const { data } = await client(`/products/${id}`)

    return data  
}


