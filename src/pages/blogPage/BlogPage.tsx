import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import type { Iblog } from "../../types/services";
import { getBlog } from "../../services/api";


function BlogPage() {
    
    const params = useParams()
    
    const [Binfo , setBinfo] = useState<Iblog>() 
    
    
    
    useEffect(()=>{
        getBlog(params.id as string).then(data=>{
            setBinfo(data)
        })
    },[])

    // console.log(price)

    return (  
        <Container>
            <div className="flex flex-col my-5 items-center">
                <img src={Binfo?.image} width='200px'/>
                <div>{Binfo?.title}</div>
                <p className="my-5">{Binfo?.description}</p>
                {/* <p>{Binfo.}</p> */}
            </div>
        </Container>
    );
}

export default BlogPage;