import type { CSSProperties } from "react";

interface IContainer {
    children : React.ReactNode
    style ?: CSSProperties
}

function Container(props:IContainer) {
    return (  
        <div className="container mx-auto" style={props.style}>
            {props.children}
        </div>
    );
}

export default Container;