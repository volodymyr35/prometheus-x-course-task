import './Cart.css';

export function Cart(props) {
  const { items, onCheckout } = props;
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  if (items.length === 0) {
    return <p>Your cart is empty</p>;
  }

  const itemList = items.map((item) => {
    return (
      <li key={item.id}>
        <span>
          {item.title} - ${item.price}
        </span>
      </li>
    );
  });

  return (
    <div>
      <h2>Cart</h2>
      <ul>{itemList}</ul>
      <p>Total: ${totalPrice}</p>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}
