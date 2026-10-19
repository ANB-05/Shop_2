
import type { Iblogs } from "../../types/services";

type blogItem = Iblogs

function BlogItems({price,description,images,category,title,rating}:blogItem) {
    
    return (  
        <div className='w-100 h-155 shadow-blue-500  border border-teal-300 rounded'>
            <img src={images[0]} className='w-full h-100'/>
            <div className='w-full'>
                <h3 className='text-center' style={{color:levelPrice(price)}}>{price}</h3>
                <h3 className='text-center'>{title}</h3>
                <div className='bg-green-500 text-white rounded-2xl m-2 p-2 line-clamp-3'>{description}</div>
            </div>
            <div className="p-4 grid grid-cols-2 ">
                <div className="col-span-1 flex justify-center">{category}</div>
                <div className="col-span-1 flex justify-center">{rating}</div>
            </div>
        </div>
    );




    function levelPrice(price:number){
        if(price > 100) return 'red'
        if(price < 10) return 'green'
        if(price > 10) return '#ebbd51'
    }
}

export default BlogItems;


