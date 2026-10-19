import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import { getBlogs } from "../../services/api";
import BlogItems from "../../components/blogsItem/BlogItems";
import { Link } from "react-router-dom";
import type { Iblogs } from "../../types/services";



function Blogs() {

    const [blogs,setblogs] = useState<Iblogs[]>([])

    useEffect(()=>{
        getBlogs().then(result=>{
            setblogs(result)
        })
    },[])


    return (  
        <Container>
            <div>
                <div className="text-center py-3 my-1 rounded bg-amber-100">
                    <h1>جدیدترین مطالب</h1>
                </div>

                <div className="grid grid-cols-3 gap-5 my-10 ">
                    {blogs.map(p => {
                        return(
                            <Link to={`/blog/${p.id}`}>
                                <BlogItems {...p} />
                            </Link>
                        )
                    })}

                </div>
            </div>
        </Container>
    );
}

export default Blogs;