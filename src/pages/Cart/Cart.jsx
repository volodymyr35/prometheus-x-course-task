import cart from "../../images/cart.svg";
import "./Cart.css";

// export function Cart({}) {
//   const { items, onCheckout } = {};
//   const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

//   if (items.length === 0) {
//     return <p>Your cart is empty</p>;
//   }

//   const itemList = items.map((item) => {
//     return (
//       <li key={item.id}>
//         <span>
//           {item.title} - ${item.price}
//         </span>
//       </li>
//     );
//   });

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>{itemList}</ul>
//       <p>Total: ${totalPrice}</p>
//       <button onClick={onCheckout}>Checkout</button>
//     </div>
//   );
// }

export function Cart() {
  return (
    <div className="cart__container">
      <button>Purchase</button>
      <img src={cart} alt="cart" />
      <span>Cart Empty...</span>
    </div>
  );
}
