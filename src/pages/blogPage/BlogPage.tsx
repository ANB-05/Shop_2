import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import type { Iblog } from "../../types/services";
import { getBlog } from "../../services/api";
import RatingStar from "../../components/ratingStar/RatingStar";



function BlogPage() {
    
    const params = useParams()
    
    const [Binfo , setBinfo] = useState<Iblog>() 
    
    
    
    useEffect(()=>{
        getBlog(params.id as string).then(data=>{
            setBinfo(data)
        })
    },[])

    console.log()

    return (  
        <Container>
            <div className="flex flex-col p-5 my-20 items-center">
                <img src={Binfo?.image} width='200px'/>
                <div className="my-3"><RatingStar rating={Binfo?.rating?.rate} /></div>
                <div>{Binfo?.title}</div>
                <p className="my-5">{Binfo?.description}</p>
            </div>
        </Container>
    );
}

export default BlogPage;