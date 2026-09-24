import type { ComponentProps } from "react";

type Tvariant =  "primary" | "secondary" | "success" | "warning" | "danger"

type TButton = ComponentProps<"button"> & {variant ?: Tvariant|null}

function Button({children, variant, style ,...rest}: TButton) {
    return (  
        <button {...rest} style={{...style ,...checkbtn(variant)}}>
            {children}
        </button>
    );
}

export default Button;


function checkbtn(variant?:Tvariant|null){
    if(variant == null ){
        return {backgroundColor:"gray",color:"white",borderRadius:'10px',padding:'10px'}
    }
    else if(variant === "primary"){
        return {backgroundColor:"blue",color:"white"}
    }else if(variant === "secondary"){
        return {backgroundColor:"blue",color:"white"}
    }else if(variant === "success"){
        return {backgroundColor:"green",color:"white"}
    }else if(variant === "warning"){
        return {backgroundColor:"yellow",color:"black"}
    }else if(variant === "danger"){
        return {backgroundColor:"red",color:"white"}
    }

}