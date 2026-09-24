import type { Iproducts } from '../../types/services';

type Product_item = Iproducts

function ProductItem({title,price,description,image}:Product_item) {
    return (  
        <div className='w-100 h-150 shadow-blue-500  border border-teal-300 rounded'>
            <img src={image} className='w-full h-100'/>
            <div className='w-full'>
                <h3 className='text-center'>{title}</h3>
                <div className='bg-green-500 text-white text-center rounded-2xl m-2 p-2'>${price}</div>
            </div>
            <div className='p-4'>
                <p className='line-clamp-3'>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ProductItem;