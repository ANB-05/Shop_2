// import { useEffect, useState } from "react";


// export function useLocalStorage<T>(key:string , initialValue: T) {
//     const [value,setValue] = useState<T>(()=>{
//         let localCart = localStorage.getItem('cartItems');

//         if(localCart != null){
//             return JSON.parse(localCart);
//         } else {
//             return initialValue;
//         }

//     })

//     useEffect(()=>{
//         localStorage.setItem(key, JSON.stringify(value))
//     },[key,value])

//     return [value,setValue] as [typeof value , typeof setValue]
// }




import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {

    const [value, setValue] = useState<T>(() => {

        const localData = localStorage.getItem(key);

        if (localData !== null) {
            try {
                return JSON.parse(localData) as T;
            } catch {
                return initialValue;
            }
        }

        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as [typeof value,typeof setValue];
}