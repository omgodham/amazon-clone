import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({id,title,price,rating,image}) {
    const [{ basket }, dispatch] = useStateValue();
    
//   const addToBasket = () => {
//     console.log("hey");
//       dispatch({
//           type:'ADD_TO_BASKET',
//           item:{
//               id:id,
//               title:title,
//               image:image,
//               price:price,
//               rating:rating,
//           },
//       });
//   };

const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  
    return (
        <div className="product">
        <div className="product__info">
            <p className="product__title">
            {title}
            </p>
            <span className="product__price">${price}</span>
            {/* {<span>🌟</span>} */}
            <div className="product__rating">
            {Array(rating).fill().map((_,i)=>(
                <p>🌟</p>
            ))}
            </div>
            </div>
            <img className="product__image" src={image} />
            <button className="product__btn" onClick={addToBasket}>Add To Basket</button>
        </div>
    );
}

export default Product
