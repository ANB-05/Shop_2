// import type { Iproducts } from '../../types/services';

// type Product_item = Iproducts

// function ProductItem({title,price,description,image}:Product_item) {
//     return (  
//         <div className='w-100 h-150 shadow-blue-500  border border-teal-300 rounded'>
//             <img src={image} className='w-full h-100'/>
//             <div className='w-full'>
//                 <h3 className='text-center'>{title}</h3>
//                 <div className='bg-green-500 text-white text-center rounded-2xl m-2 p-2'>${price}</div>
//             </div>
//             <div className='p-4'>
//                 <p className='line-clamp-3'>
//                     {description}
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default ProductItem;


import type { Iproducts } from "../../types/services";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

type Product_item = Iproducts;

function ProductItem({id,title,price,description,image}: Product_item) {

    const { toggleFavorite, isFavorite } = useShoppingCartContext();

    const favorite = isFavorite(id);

    return (
        <div className="relative w-100 h-150 shadow-blue-500 border border-teal-300 rounded">

            {/* Favorite Button */}
            <button
                type="button"
                onClick={() => {toggleFavorite(id)}}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-3 cursor-pointer shadow"
            >
                {favorite ? "❤️" : "🤍"}
            </button>

            <Link to={`/product/${id}`} className="block">

                <img src={image} alt={title} className="w-full h-100" />

                <div className="w-full">
                    <h3 className="text-center">{title}</h3>

                    <div className="bg-green-500 text-white text-center rounded-2xl m-2 p-2">
                        ${price}
                    </div>
                </div>

                <div className="p-4">
                    <p className="line-clamp-3">
                        {description}
                    </p>
                </div>
            </Link>

        </div>
    );
}

export default ProductItem;